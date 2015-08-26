/* 
* @Author: pedromello
* @Date:   2015-08-26 16:05:47
* @Last Modified by:   pedromello
* @Last Modified time: 2015-08-27 01:29:30
*/

'use strict';

angular.module('app').controller('mainController',['$scope','$http','$location',function($scope,$http,$location){

	$scope.model = {};

	//submits form if valid
	$scope.submitForm = function(valid){

		if(valid)
			$location.path("submitted");
	};

	//loads data from json
	$scope.loadData = function(){
		$http.get('/assets/data/data.json').then(function(response){
      $scope.model = response.data;
      $scope.model.dob = new Date(response.data.dob);
    });
	}

  //Opens datepicker
  $scope.openDatePicker = function($event) {
    $scope.datePickerOpened = true;
  };

  $scope.dateOptions = {
    formatYear: 'yy',
    startingDay: 1
  };

  $scope.datePickerOpened = false;

}]);