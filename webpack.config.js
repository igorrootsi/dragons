var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require("path");

module.exports = {
	devtool: 'cheap-module-source-map',
	entry: [
    'react-hot-loader/patch',
		'./index.tsx'
	],
	output: {
		filename: 'bundle.js',
		publicPath: "/",
		path: path.resolve(__dirname, "dist")
	},
	context: path.resolve(__dirname, 'src'),
	resolve: {
		extensions: ['.ts', '.tsx', '.js', 'json', '.jsx']
	},
	module: {
		loaders: [
			{
				test: /\.(ts|tsx)$/,
				loader: ['react-hot-loader/webpack', 'ts-loader']
			},
			{
				test: /\.css$/,
				loader: ['style-loader', 'css-loader']
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader?name=public/fonts/[name].[ext]'
      },
		]
  },
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
		new HtmlWebpackPlugin({
			inject: true,
			template: 'index.html'
		})
	],
	devServer: {
    hot: true,
    historyApiFallback: true,
	}
};
