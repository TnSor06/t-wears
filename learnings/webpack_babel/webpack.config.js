const htmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  module: {
    rules: [
      {
        // JS loader
        test: /\.(js|jsx)$/, // test means the type of files to be loaded
        exclude: /node_modules/, // exlcude means files to exclude since node_modules are optimized built
        use: {
          // use means which loader to use babel(Library which transpiles js into vanilla js whihc is browser readable)
          loader: "babel-loader",
        },
      },
      {
        // CSS Loader
        test: /\.css$/, // test means the type of files to be loaded
        exclude: /node_modules/, // exlcude means files to exclude since node_modules are optimized built
        use: ["style-loader", "css-loader"],
      },
      {
        // HTML Loader
        test: /\.html$/, // test means the type of files to be loaded
        exclude: /node_modules/, // exlcude means files to exclude since node_modules are optimized built
        use: {
          loader: "html-loader",
        },
      },
    ],
  },
  plugins: [
    // Bundler
    new htmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
};
// Rules is a way to define webapck what it is suppose to when it encounters certain type of files
// Like for css or sass we need different set of rules, thus we need set of loaders

// babel loader goes for index.js and runs the code and use index.html as file to run js on
// Which replaces div with id root to react code and coverts the code it
// plugins bundle the code together
