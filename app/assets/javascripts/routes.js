(function() {
    'use strict';

    angular
        .module('app')
        .config(function($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: 'templates/index.html'
                })

            $urlRouterProvider.otherwise('/');
        });
}());
