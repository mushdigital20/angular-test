/* 
* @Author: Pedro Mello
* @Date:   2015-08-26 16:01:53
* @Last Modified by:   pedromello
* @Last Modified time: 2015-08-26 21:47:33
*/

'use strict';

//Configs
angular.module('app').config(function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl: 'views/main/form.ejs',
		controller: 'mainController',
		controllerAs: 'ctrl'
	})
	.when('/submitted',{
		templateUrl: 'views/main/submitted.ejs'
	})
	.otherwise({redirectTo:'/'});
});