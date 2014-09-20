app.directive('gtNavbar', function(){
  return {
    restrict: 'E',
    templateUrl: 'templates/navbar.html',
    link: function postLink(elem, attrs, transclude) {
      $('#side-menu').metisMenu();
    }
  };
});

app.directive('gtTripManagement', function(){
  return {
    restrict: 'E',
    templateUrl: 'templates/trip-management.html'
  };
});

app.directive('gtSingleTrip', function(){
  return {
    restrict: 'E',
    templateUrl: 'templates/single-trip.html'
  };
});

app.directive('clickLink', ['$location', function($location) {
  return {
    link: function(scope, element, attrs) {
      element.on('click', function() {
        scope.$apply(function() {
          $location.path(attrs.clickLink);
        });
      });
    }
  }
}]);
