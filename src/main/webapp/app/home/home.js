'use strict';

import coreModule from '../components/core/core';
import HomeCtrl from './home.controller';

export default angular
    .module('ezquiz-home', [coreModule.name])
    .config(function ($stateProvider) {
        $stateProvider.state('main.home', {
            url: '/',
            views: {
                'content@': {
                    templateUrl: 'app/home/home.html',
                    controller: HomeCtrl,
                    controllerAs: 'home'
                }
            }
        });
    });