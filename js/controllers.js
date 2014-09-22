'use strict';

/* Controllers */

var gotravelControllers = angular.module('gotravelControllers', []);

gotravelControllers.controller('PersonalPageCtrl', ['$scope', 'Trips', 
  function($scope, Trips) {

    this.Trips = [];
    for(var idx in Trips){
      var trip = Trips[idx];
      this.Trips.push(trip);
    }

    $scope.photos = this.Trips;

  }]);

gotravelControllers.controller('LoginCtrl', ['$scope',
  function($scope) {
    
  }]);

gotravelControllers.controller('AddTripCtrl', ['$scope', 'Trips', 
  function($scope, Trips) {

    this.trip = {};

    this.save = function(){

      var trip_id = this.trip.id || String(Date.now());
      
      this.trip = {
        id: trip_id,
        subject: $scope.subject,
        location: $scope.location,
        goal: $scope.goal,
        desc: $scope.desc
      };

      Trips[trip_id] = this.trip;

      var msg = 'Subject "' + Trips[trip_id].subject + '" has been saved.';
          // msg += ' ' + Trips[trip_id].id;
      alert(msg);
    };
  }]);

gotravelControllers.controller('SingleTripViewCtrl', ['$scope', '$routeParams', 'Trips', 
  function($scope, $routeParams, Trips) {
    $scope.trip = Trips[$routeParams.tripId] || null;

    this.save = function(){
      if($scope.trip !== null){
        var trip_id = $routeParams.tripId;
        Trips[trip_id] = $scope.trip;

        var msg = 'Subject "' + Trips[trip_id].subject + '" has been saved.';
        alert(msg);
      }else{
        alert('failed save!');
      }
    };
  }]);

