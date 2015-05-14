'use strict';

import coreModule from '../components/core/core';
import HomeCtrl from './home.controller';

export default angular
    .module('ezquiz-home', [coreModule.name])
    .config($stateProvider => {
        $stateProvider.state('main.home', {
            url: '/',
            data: {
                roles: ['ROLE_USER', 'ROLE_ADMIN']
            },
            views: {
                'content': {
                    templateUrl: 'app/home/home.html',
                    controller: HomeCtrl,
                    controllerAs: 'home'
                }
            }
        });
    });
