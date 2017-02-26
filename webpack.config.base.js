/**
 * Base webpack config used across other specific configs
 */

import path from 'path'
import validate from 'webpack-validator'
import nodeExternals from 'webpack-node-externals'
import { dependencies, externals } from './package.json'

const whitelist = Object.keys(dependencies)
                  .filter(p => !externals.includes(p))
                  .concat([
                    /webpack.*/,
                    /antd.*/,
                    /rxjs.*/,
                    /redux.*/,
                    /react.*/,
                  ])

export default validate({
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel-loader'],
      exclude: /node_modules/,
    }, {
      test: /\.json$/,
      loader: 'json-loader',
    }],
  },

  output: {
    path: path.join(__dirname, 'app'),
    filename: 'bundle.js',

    // https://github.com/webpack/webpack/issues/1114
    // libraryTarget: 'commonjs2',
    libraryTarget: 'umd',
  },

  // https://webpack.github.io/docs/configuration.html#resolve
  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
    packageMains: ['webpack', 'browser', 'web', 'browserify', ['jam', 'main'], 'main'],
    alias: {
      styles: path.join(__dirname, 'app/styles'),
      js: path.join(__dirname, 'app/js'),
    },
  },

  plugins: [],

  target: 'node',
  externals: [nodeExternals({ whitelist })],
})
