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
                    templateUrl: 'devise/login.html',
                    controller: 'AuthController',
                    onEnter: function(Auth, $state){
                      Auth.currentUser().then(function(){
                        $state.go('home')
                      })
                    }
                })
                .state('register', {
                    url: '/register',
                    templateUrl: 'devise/register.html',
                    controller: 'AuthController',
                    onEnter: function(Auth, $state){
                      Auth.currentUser().then(function(){
                        $state.go('home')
                      })
                    }
                })
                .state('games', {
                  url: '/list',
                  templateUrl: 'games/list.html'
                })
                .state('new',{
                  url: '/new',
                  templateUrl: 'games/new.html',
                  controller: 'NewGameController'
                })

            $urlRouterProvider.otherwise('/');
        }]);
}());
