var webpack = require("webpack");
module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-webpack');
	grunt.initConfig({
		webpack: {
			a: {
				entry: "./src/index.js",
				output: {
					path: "build",
					filename: "bundle.js"
				},
				plugins: [new webpack.DefinePlugin({
					ok: JSON.stringify("ok")
				})]
			}
		},
		"webpack-dev-server": {
			a: {
				webpack: {
					entry: "./src/index.js",
					output: {
						path: "build",
						filename: "bundle.js"
					},
					plugins: [new webpack.DefinePlugin({
						ok: JSON.stringify("ok")
					})]
				},
				keepalive: true
			}
		}
	});
};
