(function() {
    'use strict';

    angular
        .module('app')
        .config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: 'index.html'
                })
                .state('about', {
                    url: '/about',
                    templateUrl: 'about.html'
                })
                .state('contact', {
                    url: '/contact',
                    templateUrl: 'contact.html'
                })
                .state('search', {
                    url: '/search',
                    templateUrl: 'search.html',
                    controller: 'SearchController'
                })
                .state('pulse', {
                    url: '/pulse',
                    templateUrl: 'pulse.html',
                    controller: 'PulseController'
                })
                .state('login', {
                    url: '/login',
                    templateUrl: 'devise/login.html'
                })
                .state('register', {
                    url: '/register',
                    templateUrl: 'devise/register.html'
                })

            $urlRouterProvider.otherwise('/');
        }]);
}());
