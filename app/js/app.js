'use strict';


// Declare app level module which depends on filters, and services

var app = angular.module('mainApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('view1', {
			url: '/view1',
			templateUrl: 'views/view1.html',
			controller: 'MyCtrl1'
		})
		.state('view2', {
			url: '/view2',
			templateUrl: 'views/view2.html',
			controller: 'MyCtrl2'
		});
		
	$urlRouterProvider.otherwise("/view1");
});