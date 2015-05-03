'use strict';

import SidenavCtrl from './sidenav.controller.js';
import HeaderCtrl from './header.controller.js';

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
          templateUrl: 'app/components/layout/sidenav.html',
          controller: SidenavCtrl,
          controllerAs: 'sidenav'
        },
        'header': {
          templateUrl: 'app/components/layout/header.html',
          controller: HeaderCtrl,
          controllerAs: 'header'
        }
      }
    });
  });
