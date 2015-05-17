'use strict';

import coreModule from './components/core/core';
import layoutModule from './components/layout/layout';
import securityModule from './components/security/security';
import homeModule from './home/home';
import errorModule from './errors/error';
import quizModule from './quiz/quiz';

angular.module('ezquiz', [
    coreModule.name,
    layoutModule.name,
    securityModule.name,
    homeModule.name,
    errorModule.name,
    quizModule.name
]).config($urlRouterProvider => {
    $urlRouterProvider.otherwise('/404');
});
