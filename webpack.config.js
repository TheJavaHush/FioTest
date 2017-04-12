var webpack = require('webpack'),
	path = require('path');
	

module.exports = {
	entry: './src/index.js',
	
	output: {
		path: __dirname + '/dist',
		publicPath: '/',
		filename: "bundle.js"
	},
	devServer: {
		inline: true,
		port: 3333,
        contentBase: 'public',
		headers:{
			"Access-Control-Allow-Origin": "*"
		}
    },
	module: {
		loaders: [
  			{
				test: /\.(eot|png|jpg|jpeg|gif|woff|woff2|svg|ttf)$/, 
                exclude: /node_modules/,
                loader: 'url-loader?limit=10000'
			}
    	]	
	},
	watch: true,
}
