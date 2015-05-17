'use strict';

import HomeCtrl from './home.controller';

export default angular
    .module('ezquiz-home', ['ezquiz-core'])
    .config($stateProvider => {
        $stateProvider.state('main.home', {
            url: '/',
            data: {
                roles: ['ROLE_USER', 'ROLE_ADMIN']
            },
            views: {
                'content@layout': {
                    templateUrl: 'app/home/home.html',
                    controller: HomeCtrl,
                    controllerAs: 'home'
                }
            }
        });
    });
