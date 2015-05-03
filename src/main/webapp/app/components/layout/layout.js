'use strict';

import SidenavCtrl from './sidenav/sidenav.controller';
import HeaderCtrl from './header/header.controller';

export default angular
    .module('ezquiz-layout', ['ezquiz-core'])
    .config($stateProvider => {
        $stateProvider.state('layout', {
            templateUrl: 'app/components/layout/layout.html'
        }).state('main', {
            parent: 'layout',
            abstract: true,
            views: {
                'sidenav': {
                    templateUrl: 'app/components/layout/sidenav/sidenav.html',
                    controller: SidenavCtrl,
                    controllerAs: 'sidenav'
                },
                'header': {
                    templateUrl: 'app/components/layout/header/header.html',
                    controller: HeaderCtrl,
                    controllerAs: 'header'
                }
            }
        });
    });
