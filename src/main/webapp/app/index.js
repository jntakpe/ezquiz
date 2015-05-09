'use strict';

import layoutModule from './components/layout/layout';
import homeModule from './home/home';
import errorModule from './errors/error';
import securityModule from './security/security';

angular.module('ezquiz', [
  layoutModule.name,
  homeModule.name,
  errorModule.name,
  securityModule.name
]).config($urlRouterProvider => {
  $urlRouterProvider.otherwise('/404');
});
