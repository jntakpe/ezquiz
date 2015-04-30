'use strict';

import NotFoundCtrl from './error.controller.js';

export default angular
    .module('ezquiz-error', ['ezquiz-core'])
    .config($stateProvider => {
        $stateProvider.state('main.404', {
            url: '/404',
            views: {
                'content@': {
                    templateUrl: 'app/errors/404.html',
                    controller: NotFoundCtrl,
                    controllerAs: 'notFound'
                }
            }
        })
    });