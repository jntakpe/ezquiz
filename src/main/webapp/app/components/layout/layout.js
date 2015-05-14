'use strict';

import SidenavCtrl from './sidenav/sidenav.controller';
import SidenavService from './sidenav/sidenav.service';
import {humanizeDoc} from './sidenav/sidenav.filter';
import HeaderCtrl from './header/header.controller';
import {menuLink, menuToggle} from './sidenav/sidenav.directive';

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
    })
    .filter('humanizeDoc', humanizeDoc)
    .service('sidenavService', SidenavService)
    .directive('menuLink', menuLink)
    .directive('menuToggle', menuToggle);
