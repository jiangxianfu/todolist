'use strict';


// Declare app level module which depends on filters, and services

angular.module('mainApp', ['ngRoute','mainApp.filters', 'mainApp.services', 'mainApp.directives']).config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/view1', {
		templateUrl: 'views/view1.html',
		controller: MyCtrl1
	});
	$routeProvider.when('/view2', {
		templateUrl: 'views/view2.html',
		controller: MyCtrl2
	});
	$routeProvider.otherwise({
		redirectTo: '/view1'
	});
}]);