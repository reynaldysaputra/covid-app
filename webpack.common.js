const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
     entry : './src/app.js',

     output : {
          path : path.resolve(__dirname, 'dist'),
          filename : 'bundle.js'
     },

     performance: { hints: false },

     // Module
     module : {
          rules : [
               {
                    test: /\.js$/,
                    enforce: 'pre',
                    use: ['source-map-loader'],
               },
               {
                    test: /\.css$/i,
                    use: ['style-loader', 'css-loader'],
               },
               {
                    test: /\.exec\.js$/,
                    use: ['script-loader']
               },     
               {
                    test: /\.html$/i,
                    loader: 'html-loader',
               },
               {
                    test: /\.(png|jpe?g|gif)$/i,
                    loader: 'file-loader',
                    options: {
                      name: '[name][hash].[ext]',
                      outputPath : 'Img'
                    },
               },
          ]
     },

     plugins : [
          new HtmlWebpackPlugin({
               template: "./src/beranda.html",
               filename: "beranda.html"
          }),
          new HtmlWebpackPlugin({
               template: "./src/tentang.html",
               filename: "tentang.html"
          }),
     ],

      devServer : {
           contentBase : path.join(__dirname, 'dist'),
           compress : true,
           port : 3000,
           open : 'Google Chrome'
      }
}