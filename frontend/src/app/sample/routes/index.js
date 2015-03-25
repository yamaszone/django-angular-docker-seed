require('./task-edit');
require('./home');

angular.module('myapp').run(function($rootScope, RouteService) {
    $rootScope.$on('$routeChangeError', function(ev, current, previous, rejection) {
        if (rejection.status === 404) {
            alert('Not found');
            RouteService.open('home');
        }
    });
});