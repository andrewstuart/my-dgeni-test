/**
 * @ngdoc module
 * @name app
 * @description app
 */

/**
 * @ngdoc service
 * @name app.ngFoo
 * @description Hello world
 */

/**
 * @ngdoc method
 * @name app.ngFoo#bar
 * @kind function
 *
 * @param {string} baz The first param
 *
 * @description What in the heck?
 *
 * @returns {Stuff} More Stuff.
 */

angular.module('fart').directive('foo', function($http) {
  $http.post('/foo');
});
