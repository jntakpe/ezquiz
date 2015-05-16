'use strict';

export default class PrincipalService {

    constructor($q, $http) {
        this.$q = $q;
        this.$http = $http;
        this.identity = null;
        this.authenticated = false;
    }

    isIdentityResolved() {
        return this.identity !== null;
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
            if (this.isInRole(role)) {
                return true;
            }
        }
        return false;
    }

    authenticate(identity) {
        this.identity = identity;
        this.authenticated = identity !== null;
    }

    resolveIdentity(force) {
        var deferred = this.$q.defer();
        if (force === true) {
            this.identity = null;
        }
        if (this.isIdentityResolved()) {
            deferred.resolve(this.identity);
            return deferred.promise;
        }
        this.$http.get('api/account').then(account => {
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
