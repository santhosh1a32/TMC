var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	// Entry file for the app,
	entry: "./www/js/app.js",

	//output to source files after bundled
	devtool: 'source-map',

	//output the bundled files
	output: {
		path: __dirname + '/www',
		filename: "bundle.js"
	},
	module: {
		loaders: [
			// used to transpile es6 to es5 code 
			{
				//will affect all .js files
				test: /.js$/,
				loader: 'babel-loader',
				exclude: [/www\/lib/, /node_modules/],
				query: {
					presets: ['es2015']
				}
			},
			{
                // proccess scss files when required
               test: /\.scss$/,
               // extract the output file to a different location and inject it manualy to the page
               loader: ExtractTextPlugin.extract('style-loader', 'css!sass?sourceMap')
            },
            {
              test:/\.(png|gif|jp(e)?g)$/,
              loader:'url-loader?limit=8192'
            },
            {
                test   : /\.woff/,
                loader : 'url?prefix=font/&limit=10000&mimetype=application/font-woff&name=assets/[hash].[ext]'
            },
            {
                test   : /\.ttf/,
                loader : 'file?prefix=font/&name=assets/[hash].[ext]'
            },
            {
                test   : /\.eot/,
                loader : 'file?prefix=font/&name=assets/[hash].[ext]'
            },
            {
                test   : /\.svg/,
                loader : 'file?prefix=font/&name=assets/[hash].[ext]'
            },
            {
              test: /\.html$/,
              loader: "raw-loader"
            }
		]
	},
	plugins: [
		 // output css file name when etracted with all the scss compiled
       new ExtractTextPlugin('ionic.app.css', {
           allChunks: true
       })
	],
	// When requiring modules in our code, require and import will first look in these directories
   // so we won't need to wrie relative paths
    resolve: {
        root: __dirname + "/www/",
        modulesDirectories: ["web_modules","node_modules", "lib", "scss"],
        // this will allow us to require('somejsfile') with out the .js extension
        extensions: ['', '.js']
    }
}