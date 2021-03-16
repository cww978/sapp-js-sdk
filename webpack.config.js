var paths = require("path")
module.exports = {
  entry: {
    sdk: "./src/lib/sdk.js",
    runtime: "./src/lib/runtime.js"
  },
  output: {
    path:__dirname + '/src/dist',
    libraryExport: "default",
    library: "sapp",
    libraryTarget: 'umd',
    filename: 'sapp-js-[name]-min.js'
  }
}