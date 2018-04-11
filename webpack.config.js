var path = require('path');

module.exports = {
	entry: "./src/assets/scripts/App.js",
	output: {
		path: path.resolve(__dirname, "./src/temp/scripts"),
		filename: "App-compiled.js"
	},
	module: {
		loaders:[
			{
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				},
				test: /\.js$/,
				exclude: /node_modules/
			}
		]
	}

}