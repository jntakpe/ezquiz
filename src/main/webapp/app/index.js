'use strict';

import sidenavModule from './components/sidenav/sidenav';
import homeModule from './home/home';
import errorModule from './errors/error';

angular.module('ezquiz', [
    sidenavModule.name,
    homeModule.name,
    errorModule.name
]).config(($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/404');
});
