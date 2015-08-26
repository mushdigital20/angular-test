/* 
* @Author: Pedro Mello
* @Date:   2015-08-26 14:45:00
* @Last Modified by:   pedromello
* @Last Modified time: 2015-08-26 23:38:22
*/
'use strict';

require('bootstrap-webpack');
require('angular');
require('angular-route');
require('angular-ui-bootstrap');
require('!style!css!less!./assets/css/application.css.less');

var app = angular.module('app',['ngRoute','ui.bootstrap','util.directives']);

//Configs
var configs = require.context('./assets/js/config', true, /.js$/);
configs.keys().forEach(configs);

//Services
var services = require.context('./assets/js/services', true, /.js$/);
services.keys().forEach(services);

//Directives
var directives = require.context('./assets/js/directives', true, /.js$/);
directives.keys().forEach(directives);

//Filters
// var filters = require.context('./filters', true, /.js$/);
// filters.keys().forEach(filters);

//Controllers
var controllers = require.context('./assets/js/controllers', true, /.js$/);
controllers.keys().forEach(controllers);