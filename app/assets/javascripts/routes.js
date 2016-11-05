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

            $urlRouterProvider.otherwise('/');
        }]);
}());
