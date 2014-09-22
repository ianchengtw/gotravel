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
      	desc: 'this is a abc description. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, at necessitatibus ipsam incidunt cupiditate sequi, repudiandae voluptas tenetur saepe nemo inventore beatae quam nobis laudantium eaque nam vel deserunt porro.'
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
      },
      'abc4': {
            id: 'abc4',
            subject: 'Indan Trip',
            location: 'lll',
            goal: 'goal',
            desc: 'desc Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi iste optio error repellendus fugiat laborum repellat praesentium itaque magni maiores suscipit, accusantium veniam, laudantium officia? Amet, et aut soluta quasi!'
      },
      'abc5': {
            id: 'abc5',
            subject: 'Korean Trip',
            location: 'lll',
            goal: 'goal',
            desc: 'desc Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi iste optio error repellendus fugiat laborum repellat praesentium itaque magni maiores suscipit, accusantium veniam, laudantium officia? Amet, et aut soluta quasi!'
      }
  };
});
