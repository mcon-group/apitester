module.exports = {
  mode: "development",
  entry: "./main/main.ts",
  output: {
    filename: "../../src/dist/js/app.js"
  },
  resolve: {
    // Add '.ts' and '.tsx' as a resolvable extension.
    extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      // all files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
      { test: /\.tsx?$/, loader: "ts-loader" },
      { test: /\.css?$/, loader: "css-loader" },
      { test: /\.html?$/, loader: "html-loader" }
    ]
  }
};
