'use strict';


/* App Module */

var app = angular.module('gotravelApp', [
  'ngRoute',
  'gotravelControllers',
  'gotravelServices',
  'ui.bootstrap'
]);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'templates/personal-page.html',
        controller: 'PersonalPageCtrl'
      }).
      when('/login', {
        templateUrl: 'templates/login.html',
        controller: 'LoginCtrl'
      }).
      when('/add-trip', {
        templateUrl: 'templates/add-trip.html',
        controller: 'AddTripCtrl'
      }).
      when('/view-trip/:tripId', {
        templateUrl: 'templates/single-trip-view.html',
        controller: 'SingleTripViewCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);
