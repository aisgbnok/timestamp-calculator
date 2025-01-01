import type { Configuration } from 'webpack';
import * as path from 'path';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import * as MiniCssExtractPlugin from 'mini-css-extract-plugin';
import * as CssMinimizerPlugin from 'css-minimizer-webpack-plugin';

export function common(env: any, argv: any) {
  const devMode = argv.mode === 'development';

  return <Configuration>{
    context: path.resolve(__dirname, 'src'),
    entry: {
      index: './index.ts'
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css',
      }),
      new HtmlWebpackPlugin({
        title: 'Timestamp Calculator',
        template: './template.html',
        meta: {
          'viewport': 'width=device-width, initial-scale=1',
          'description': 'Simple timestamp calculator website.',
        }
      })
    ],
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            // fallback to style-loader in development
            devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            'css-loader',
            // Compiles Sass to CSS
            {
              loader: 'sass-loader',
              options: {
                sassOptions: {
                  silenceDeprecations: ['color-functions', 'mixed-decls', `global-builtin`]
                }
              }
            }
          ],
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
      filename: '[name].[contenthash].js',
      path: path.resolve(__dirname, 'dist'),
      clean: true
    },
    optimization: {
      moduleIds: 'deterministic',
      runtimeChunk: 'single',
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
      minimizer: [
        '...',
        new CssMinimizerPlugin(),
      ],
    }
  };
}