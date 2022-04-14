// import webpack from 'webpack';
// import path, {dirname} from 'path';
// import { fileURLToPath } from 'url';
// import HtmlWebpackPlugin from 'html-webpack-plugin';
// import BundleAnalyzerPlugin from 'webpack-bundle-analyzer';
// const __dirname = dirname(fileURLToPath(import.meta.url));
const webpack = require('webpack');
const path = require('path');
const { fileURLToPath } = require('url');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer');
// const __dirname = dirname(fileURLToPath(import.meta.url));

module.exports = {
  entry: ['./client/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/react'],
          plugins: ['@babel/plugin-transform-runtime', '@babel/transform-async-to-generator'],
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            // options: {
            //   importLoaders: 1,
            // },
          },
          //'postcss-loader',
        ],
        exclude: /\.module\.css$/,
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            // options: {
            //   importLoaders: 1,
            //   modules: true,
            // },
          },
          //'postcss-loader',
        ],
        include: /\.module\.css$/,
      },
      {
        test: /\.svg$/,
        use: 'file-loader',
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              mimetype: 'image/png',
            },
          },
        ],
      },
    ],
  },
  devServer: {
    static: {
      directory: './dist',
    },
    proxy: {
      '/': 'http://localhost:3000/',
      '/auth/*': 'http://localhost:3000',
      '/user/*': 'http://localhost:3000'
    }
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    // new BundleAnalyzerPlugin.BundleAnalyzerPlugin({
    //   analyzerMode: 'static',
    //   openAnalyzer: false,
    // }),
    new HtmlWebpackPlugin({
      title: 'Development',
      template: 'client/index.html'
    })
  ],
};
