'use strict';

import layoutModule from './components/layout/layout';
import homeModule from './home/home';
import errorModule from './errors/error';

angular.module('ezquiz', [
  layoutModule.name,
  homeModule.name,
  errorModule.name
]).config($urlRouterProvider => {
  $urlRouterProvider.otherwise('/404');
});
