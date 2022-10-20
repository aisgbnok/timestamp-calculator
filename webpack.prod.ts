import type { Configuration } from 'webpack';
import { merge } from 'webpack-merge';
import { common } from './webpack.common';

module.exports = (env: any, args: any) => {
  return merge<Configuration>(common(env, args), <Configuration>{
    mode: 'production',
    devtool: 'source-map',
  });
}