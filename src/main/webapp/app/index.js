'use strict';

import layoutModule from './components/layout/layout';
import securityModule from './components/security/security';
import homeModule from './home/home';
import errorModule from './errors/error';

angular.module('ezquiz', [
  layoutModule.name,
  homeModule.name,
  errorModule.name,
  securityModule.name
]).config($urlRouterProvider => {
  $urlRouterProvider.otherwise('/404');
});
