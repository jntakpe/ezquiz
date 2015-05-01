'use strict';

import SidenavCtrl from './sidenav.controller.js';

export default angular
    .module('ezquiz-sidenav', ['ezquiz-core'])
    .config($stateProvider => {
        $stateProvider.state('main', {
            abstract: true,
            views: {
                'sidenav@': {
                    templateUrl: 'app/components/sidenav/sidenav.html',
                    controller: SidenavCtrl,
                    controllerAs: 'sidenav'
                }
            }
        });
    });