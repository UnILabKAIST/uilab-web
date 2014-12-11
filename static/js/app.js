/**
* uilab Module
*
* Description
*/
angular.module('uilab', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
     $routeProvider
       .when('/home', {
         templateUrl: 'views/home.html',
         controller: 'HomeCtrl'})
       .when('/members', {
         templateUrl: 'views/members.html',
         controller: 'MembersCtrl'})
       .when('/research', {
         templateUrl: 'views/research.html',
         controller: 'ResearchCtrl'})
       .otherwise({redirectTo: '/'});
       }]);
