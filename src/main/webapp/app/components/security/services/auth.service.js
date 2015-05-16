'use strict';

export default class AuthService {

    constructor($rootScope, $state, $q, principalService, oauth2Service) {
        this.$rootScope = $rootScope;
        this.$state = $state;
        this.$q = $q;
        this.principalService = principalService;
        this.oauth2Service = oauth2Service;
    }

    login(credentials, callback) {
        var cb = callback || angular.noop, deferred = this.$q.defer();
        this.oauth2Service.login(credentials).then(response => {
            this.principalService.resolveIdentity(true).then(() => deferred.resolve(response));
            return cb();
        }).catch(err => {
            this.logout();
            deferred.reject(err);
            return cb(err);
        });
        return deferred.promise;
    }

    logout() {
        this.oauth2Service.logout();
        this.principalService.authenticate(null);
    }

    authorize(force) {
        return this.principalService.resolveIdentity(force).then(identity => {
            var data = this.$rootScope.toState.data;
            if (data && data.roles && data.roles.length > 0 && !this.principalService.isInAnyRole(data.roles)) {
                if (this.principalService.isAuthenticated()) {
                    this.$state.go('main.home');
                } else {
                    this.$rootScope.returnToState = this.$rootScope.toState;
                    this.$rootScope.returnToStateParams = this.$rootScope.toStateParams;
                    this.$state.go('login');
                }
            }
            return identity;
        });
    }
}
