var learnApp = angular.module('learnApp', ['ui.router']);

learnApp.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/angular/overview');

    $stateProvider

        .state('angular', {
             url: '/angular',
             templateUrl: 'views/common.html',
			 controller: 'leftNavController'
        })
        .state('angular.overview', {
            url: '/overview',
            templateUrl: 'views/overview.html',
            controller: function ($scope) {
               
            }
        })        
        .state('angular.intro', {
            url: '/intro',
            templateUrl: 'views/intro.html',
            controller: function ($scope) {
              
            }
        })
		.state('angular.mvc', {
            url: '/mvc',
            templateUrl: 'views/mvc.html',
            controller: function ($scope) {
               
            }
        })        
        .state('angular.data-binding', {
            url: '/data-binding',
            templateUrl: 'views/data-binding.html',
            controller: function ($scope) {
              
            }
        })
		.state('angular.routing', {
            url: '/routing',
            templateUrl: 'views/routing.html',
            controller: function ($scope) {
               
            }
        })        
        .state('angular.services', {
            url: '/services',
            templateUrl: 'views/services.html',
            controller: function ($scope) {
              
            }
        })
		.state('angular.directives', {
            url: '/directives',
            templateUrl: 'views/directives.html',
            controller: function ($scope) {
               
            }
        })        
        .state('angular.modules', {
            url: '/modules',
            templateUrl: 'views/modules.html',
            controller: function ($scope) {
              
            }
        })
		.state('angular.filter', {
            url: '/filter',
            templateUrl: 'views/filter.html',
            controller: function ($scope) {
               
            }
        })        
        .state('angular.controller', {
            url: '/controller',
            templateUrl: 'views/controller.html',
            controller: function ($scope) {
              
            }
        })

         .state('angular2', {
             url: '/angular2',
             templateUrl: 'views/common.html'
         })

        // nested list with custom controller
        .state('angular2.overview', {
            url: '/overview',
            templateUrl: 'views/overview.html',
            controller: function ($scope) {
            }
        })


        // nested list with custom controller
        .state('angular2.intro', {
            url: '/intro',
            templateUrl: 'views/intro.html',
            controller: function ($scope) {

            }
        })

});