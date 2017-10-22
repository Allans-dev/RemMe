// const path = require('path');
//
// module.exports = {
//   context: path.join(__dirname, 'src'),
//   entry: [
//     './index.js',
//   ],
//   output: {
//     path: path.join(__dirname),
//     filename: 'bundle.js',
//   },
//   module: {
//     rules: [
//       {
//         test: /\.jsx?$/,
//         exclude: /node_modules/,
//         use: [
//           'babel-loader',
//         ],
//       },
//     ],
//   },
//   resolve: {
//     modules: [
//       path.join(__dirname, 'node_modules'),
//     ],
//   },
// };

const path = require('path');

const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
     filename: "main.css",
     disable: process.env.NODE_ENV === "development"
 });

module.exports = {
  context: path.join(__dirname, 'src'),
      entry: [
          './main.js',
      ],
      output: {
          path: path.join(__dirname),
          filename: 'bundle.js',
      },
      module: {
          rules: [
              {
                  test: /\.js$/,
                  exclude: /node_modules/,
                  use: 'babel-loader',
                  include: path.join(__dirname, 'src')
              },
              {
                  test: /\.s?css$/,
                  use: extractSass.extract({
                      use: [
                          { loader: "css-loader" },
                          {
                              loader: "sass-loader",
                              options: {
                                  includePaths: [require("bourbon-neat").includePaths]
                              }
                          }
                          ],
                      fallback: "style-loader"
                  }),
                  include: path.join(__dirname, 'style')
              },
          ]
      },
      plugins: [
          extractSass
      ],
      resolve: {
          modules: [
              path.join(__dirname, 'node_modules'),
          ],
      },
