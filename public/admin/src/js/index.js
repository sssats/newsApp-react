import angular from 'angular';
import ngRoute from 'angular-route';

let app = angular.module('admin', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/articles', {
    templateUrl: 'articles.html'
  });
  $locationProvider.html5Mode({enabled: true, requireBase: false});
});

require('./articles/articles.component.js');
