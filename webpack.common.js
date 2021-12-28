const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './src/index.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Timestamp Calculator',
      template: './src/template.html',
      'meta': {
        'viewport': 'width=device-width, initial-scale=1',
        'description': 'Simple timestamp calculator website',
      }
    }),
  ],
}