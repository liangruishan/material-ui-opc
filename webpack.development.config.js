var path = require("path");
var webpack = require('webpack');
var node_modules_dir = path.resolve(__dirname, 'node_modules');

module.exports = {
  // This is the main file that should include all other JS files
  entry:{
    app:[ "webpack/hot/dev-server", "./src/js/app.js"],
    vendors:["react"]
  },
  devtool: 'inline-source-map',
  watch: true,
  output: {
        path: path.join(__dirname, "public","build"),
        publicPath: "build/",
        filename: "[name].bundle.js"
  },

  resolve: {
    // Tell webpack to look for required files in bower and node
    modulesDirectories: ['bower_components', 'node_modules'],
  },

  module: {
    loaders: [
      { test: /\.css/, loader: "style-loader!css-loader" },
      { test: /\.gif/, loader: "url-loader?limit=10000&minetype=image/gif" },
      { test: /\.jpg/, loader: "url-loader?limit=10000&minetype=image/jpg" },
      { test: /\.png/, loader: "url-loader?limit=20000&minetype=image/png" },
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ["react-hot","babel?loose=all"] },
    ],
    noParse: /\.min\.js/
  },
  plugins: [
    // If you want to minify everything
    // new webpack.optimize.UglifyJsPlugin()
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    })
  ]
};
