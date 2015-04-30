'use strict';

import homeModule from './home/home';
import errorModule from './errors/error';

angular.module('ezquiz', [
    homeModule.name,
    errorModule.name
]).config(($stateProvider, $urlRouterProvider) => {
    $stateProvider.state('main', {
        abstract: true
    });
    $urlRouterProvider.otherwise('/404');
});
