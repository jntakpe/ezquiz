'use strict';

import SigninCtrl from './signin/signin.controller';

export default angular
  .module('ezquiz-security', ['ezquiz-core'])
  .config($stateProvider => {
    $stateProvider.state('login', {
      url: '/login',
      views: {
        '': {
          templateUrl: 'app/security/signin/signin.html',
          controller: SigninCtrl,
          controllerAs: 'signin'
        }
      }
    });
  });
