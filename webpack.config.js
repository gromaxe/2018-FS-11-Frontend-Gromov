const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const sourceRoot = path.resolve(__dirname, 'src');

module.exports = {
        target: "web",
	entry: {
		create: sourceRoot + '/app/create/index.js'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		//publicPath: '/static/',
		filename: '[name]/bundle.js'
	},
	
  	devServer: {
    	publicPath: './dist/',
	contentBase: './dist/',
    	watchContentBase: true
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				include: sourceRoot,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.css$/,
				include: sourceRoot,
                use: ExtractTextPlugin.extract('css-loader')
			}
		]
	},
	plugins: [
		new ExtractTextPlugin({
			filename: '[name]/styles.css'
		}),
		new HtmlWebpackPlugin({
			filename: 'create/index.html',
			template: './src/app/create/index.html'
		})
	]
};
