'use strict';

import {homeModule} from './home/home';

angular.module('ezquiz', [
    homeModule.name
]).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('main', {
        abstract: true
    });
    $urlRouterProvider.otherwise('/404');
});
