/* 
* @Author: Pedro Mello
* @Date:   2015-08-26 15:24:29
* @Last Modified by:   Pedro Mello
* @Last Modified time: 2015-08-26 16:34:28
*/

'use strict';

var express 			= require('express'),
	webpackMiddleWare 	= require('webpack-dev-middleware'),
	webpack 			= require('webpack'),
	webpackServer		= require('webpack-dev-server'),
	webpackConfig		= require('./webpack.config.js'),
	path 				= require('path'),
	engine				= require('ejs-locals'),
	packageJson			= require('./package.json')

//App set up
var app = express();
var assetsPath = path.resolve(__dirname,'app');
var port = process.env.PORT || 8080;
var host = process.env.YOUR_HOST || '0.0.0.0';
var env = process.env.NODE_ENV || 'dev';

//views engine
app.engine('ejs',engine);
app.set('view engine','ejs');
app.set('views','./app/views');

//Routes
app.get("/",function(request,response){
	response.render('index',{
		author:packageJson.author
	});
});

app.use(express.static(assetsPath));

if(env === 'dev')
{
	//Using webpack to generate virtual bundle during development
	var compiler = webpack(webpackConfig);
	app.use(webpackMiddleWare(compiler,{}));
}

app.listen(port,host,function(){
	console.log('Server started on port:'+port);
});