'use strict';

export default class PrincipalService {

    constructor($q, accountService) {
        this.$q = $q;
        this.accountService = accountService;
        this.identity = null;
        this.authenticated = false;
    }

    isIdentityResolved() {
        return angular.isDefined(this.identity);
    }

    isAuthenticated() {
        return this.authenticated;
    }

    isInRole(role) {
        return this.authenticated && this.identity && this.identity.roles && this.identity.roles.indexOf(role) !== -1;
    }

    isInAnyRole(roles) {
        if (!this.authenticated || !this.identity) {
            return false;
        }
        for (let role of roles) {
            if (this.isInRole(roles[role])) {
                return true;
            }
        }
        return false;
    }

    authenticate(identity) {
        this.identity = identity;
        this.authenticated = identity !== null;
    }

    getIdentity(force) {
        var deferred = this.$q.defer();
        if (force === true) {
            this.identity = null;
        }
        if (angular.isDefined(this.identity)) {
            deferred.resolve(this.identity);
            return deferred.promise;
        }
        this.accountService.get().$promise.then(account => {
            this.identity = account.data;
            this.authenticated = true;
            deferred.resolve(this.identity);
        }).catch(() => {
            this.identity = null;
            this.authenticated = false;
            deferred.resolve(this.identity);
        });
        return deferred.promise;
    }

}
