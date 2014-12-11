/**
* uilab Module
*
* Description
*/
angular.module('uilab', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
     $routeProvider
       .when('/', {
         templateUrl: 'views/home.html',
         controller: 'HomeCtrl'})
       .when('/members', {
         templateUrl: 'views/members.html',
         controller: 'MembersCtrl'})
       .when('/research', {
         templateUrl: 'views/research.html',
         controller: 'ResearchCtrl'})
       .when('/links', {
         templateUrl: 'views/links.html',
         controller: 'LinksCtrl'})
       .otherwise({redirectTo: '/'});
       }]);
