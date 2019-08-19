const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const sassOptions = {
  includePaths: [
    './node_modules',
    './theme'
  ]
};

module.exports = {
  mode: 'development',
  entry: {
    bundle: path.resolve(__dirname, 'index.js'),
    'TopAppBar-Standard': path.resolve(__dirname, 'component-demos', 'TopAppBar', 'standard.js'),
    'TopAppBar-Fixed': path.resolve(__dirname, 'component-demos', 'TopAppBar', 'fixed.js'),
    'TopAppBar-Dense': path.resolve(__dirname, 'component-demos', 'TopAppBar', 'dense.js'),
    'TopAppBar-Prominent': path.resolve(__dirname, 'component-demos', 'TopAppBar', 'prominent.js'),
    'TopAppBar-Short': path.resolve(__dirname, 'component-demos', 'TopAppBar', 'short.js'),
    'TopAppBar-ShortClosed': path.resolve(__dirname, 'component-demos', 'TopAppBar', 'shortclosed.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  // resolve: {
  //   alias: {
  //     // This is so the demo can import from 'svelte-material-ui'.
  //     'svelte-material-ui': path.resolve(__dirname, '..', 'svelte-material-ui'),
  //   },
  // },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[name].[id].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(html|svelte)$/,
        use: 'svelte-loader',
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              // importer: url => {
              //   // This is so the demo can @import from 'svelte-material-ui'.
              //   if (url.startsWith('svelte-material-ui/')) {
              //     return {file: url.replace(/^svelte-material-ui/, path.resolve(__dirname, '..', 'svelte-material-ui'))};
              //   }
              //   return null;
              // },
              ...sassOptions
            },
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};