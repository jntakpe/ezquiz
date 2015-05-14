'use strict';

export default angular
    .module('ezquiz-core', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngResource', 'ngMaterial', 'ui.router'])
    .config($mdThemingProvider => {
      $mdThemingProvider
          .theme('default')
          .accentPalette('orange');
    });

