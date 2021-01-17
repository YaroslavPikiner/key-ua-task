const path = require("path");
const miniCss = require("mini-css-extract-plugin");

var SRC = path.resolve(__dirname, 'src/main/js');
module.exports = {
  mode: 'development',
  entry: "./src/js/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        miniCss.loader,
        {
          loader: "css-loader",
          options: {
            url: false
          }
        },
        'resolve-url-loader',
        "sass-loader"
      ],
    }, ],
  },
  plugins: [
    new miniCss({
      filename: "style.css",
    }),
  ],
};
