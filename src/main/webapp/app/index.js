'use strict';

import MainCtrl from './main/main.controller';
import NavbarCtrl from '../app/components/navbar/navbar.controller';

angular.module('ezquiz', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngResource', 'ui.router', 'ngMaterial'])
  .controller('MainCtrl', MainCtrl)
  .controller('NavbarCtrl', NavbarCtrl)

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });

    $urlRouterProvider.otherwise('/');
  })
;
