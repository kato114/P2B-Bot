const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = {
	// Other rules...
	plugins: [
		new NodePolyfillPlugin()
	],
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: "pre",
        use: ["source-map-loader"],
      },
    ],
  },
  ignoreWarnings: [/Failed to parse source map/],
};