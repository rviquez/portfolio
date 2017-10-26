var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');


module.exports = {
  entry: {
    'app': './src/js/init.js'
  },

  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.scss', '.css']
  },

  module: {
    rules: [
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file-loader?name=assets/[name].[hash].[ext]'
      },
      {
        test: /\.scss$/,
        exclude: helpers.root('src', 'app'),
        //loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
        use: ExtractTextPlugin.extract({
         fallback: "style-loader",
         use: "css-loader!sass-loader",
       })
      },
      {
        test: /\.css$/,
        exclude: helpers.root('src', 'app'),
        //loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
        use: ExtractTextPlugin.extract({
         fallback: "style-loader",
         use: "css-loader!sass-loader",
       })
     },
      {
        test: /\.css$/,
        include: helpers.root('src', 'app'),
        loader: 'raw-loader'
      },
      {
      test: /\.js$/,
      include: helpers.root('src', 'js'),
      use: [{
        loader: 'babel-loader',
        options: {
          presets: [
              ['env', { modules: false }]
            ]
          }
        }]
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app']
    }),

    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
    ]
};
