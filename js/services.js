'use strict';

/* Services */

var gotravelServices = angular.module('gotravelServices', []);

gotravelServices.factory('Trips', function() {
  return {
      'abc0': {
      	id: 'abc0',
      	subject: 'Tokyo Trip',
      	location: 'abc location',
      	goal: 'abc goal',
      	desc: 'this is a abc description.'
      },
      'abc1': {
      	id: 'abc1',
      	subject: 'China Trip',
      	location: 'abc location',
      	goal: 'abc goal',
      	desc: 'this is a abc description.'
      },
      'abc2': {
      	id: 'abc2',
      	subject: 'Kyoto Trip',
      	location: 'abc location',
      	goal: 'abc goal',
      	desc: 'this is a abc description.'
      },
      'abc3': {
      	id: 'abc3',
      	subject: 'American Trip',
      	location: 'abc location',
      	goal: 'abc goal',
      	desc: 'this is a abc description.'
      }
  };
});
