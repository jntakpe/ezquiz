'use strict';

import SigninCtrl from './signin/signin.controller';
import AccountService from './services/account.service';
import PrincipalService from './services/principal.service';
import OAuth2Service from './services/oauth2.service';
import AuthService from './services/auth.service';
import {authExpiredInterceptor, authInterceptor} from './interceptors/route.interceptor';

export default angular
    .module('ezquiz-security', ['ezquiz-core', 'LocalStorageModule'])
    .config(($stateProvider, $urlRouterProvider, $httpProvider) => {
        $stateProvider.state('login', {
            url: '/login',
            views: {
                '': {
                    templateUrl: 'app/components/security/signin/signin.html',
                    controller: SigninCtrl,
                    controllerAs: 'signin'
                }
            }
        });
        $httpProvider.interceptors.push('authInterceptor');
        $httpProvider.interceptors.push('authExpiredInterceptor');
    })
    .run(($rootScope, $location, $window, $http, $state, principalService, authService) => {
        $rootScope.$on('$stateChangeStart', function (event, toState, toStateParams) {
            $rootScope.toState = toState;
            $rootScope.toStateParams = toStateParams;
            if (principalService.isIdentityResolved()) {
                authService.authorize();
            }
        });
        $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
            $rootScope.previousStateName = fromState.name;
            $rootScope.previousStateParams = fromParams;
        });
        $rootScope.back = function () {
            if ($state.get($rootScope.previousStateName) === null) {
                $state.go('home');
            } else {
                $state.go($rootScope.previousStateName, $rootScope.previousStateParams);
            }
        };
    })
    .service('oauth2Service', OAuth2Service)
    .service('accountService', AccountService)
    .service('principalService', PrincipalService)
    .service('authService', AuthService)
    .factory('authInterceptor', authInterceptor)
    .factory('authExpiredInterceptor', authExpiredInterceptor);
