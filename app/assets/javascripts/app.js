(function() {
    'use strict';

    angular
        .module('app', ['ui.router', 'templates', 'ngResource', 'ngMessages', 'Devise'])
        .config(function($httpProvider) {
        // for CSRF Errors
        $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
        });
}());
