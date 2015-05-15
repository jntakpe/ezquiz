'use strict';

import coreModule from './components/core/core';
import layoutModule from './components/layout/layout';
import securityModule from './components/security/security';
import homeModule from './home/home';
import errorModule from './errors/error';

angular.module('ezquiz', [
    coreModule.name,
    layoutModule.name,
    errorModule.name,
    securityModule.name,
    homeModule.name
]).config($urlRouterProvider => {
    $urlRouterProvider.otherwise('/404');
});
