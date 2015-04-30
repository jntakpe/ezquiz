'use strict';

import homeModule from './home/home';

angular.module('ezquiz', [
    homeModule.name
]).config(($stateProvider, $urlRouterProvider) => {
    $stateProvider.state('main', {
        abstract: true
    });
    $urlRouterProvider.otherwise('/404');
});
