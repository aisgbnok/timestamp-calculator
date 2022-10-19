import type { Configuration } from 'webpack';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { merge } from 'webpack-merge';
import { common } from './webpack.common';

const devServer: DevServerConfiguration = {
  static: './dist',
};

module.exports = (env: any, args: any) => {
  return merge<Configuration>(common(env, args), <Configuration>{
    mode: 'development',
    devtool: 'eval-cheap-module-source-map',
    devServer,
  });
}