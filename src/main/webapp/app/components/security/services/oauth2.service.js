'use strict';

export default class OAuth2Service {

    constructor($http, localStorageService) {
        this.$http = $http;
        this.localStorageService = localStorageService;
    }

    login(credentials) {
        var data = 'username=' + credentials.username + '&password=' + credentials.password +
            '&grant_type=password&scope=read%20write&';
        return this.$http.post('oauth/token', data, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json',
                'Authorization': 'Basic ' + window.btoa('ezquiz' + ':' + 'ezquizsupersecret')
            }
        }).success((response) => {
            var expiredAt = new Date();
            expiredAt.setSeconds(expiredAt.getSeconds() + response.expires_in);
            response.expires_at = expiredAt.getTime();
            this.localStorageService.set('token', response);
            return response;
        });
    }

    logout() {
        this.$http.post('api/logout').then(() => this.localStorageService.clearAll());
    }

    getToken() {
        return this.localStorageService.get('token');
    }

    hasValidToken() {
        var token = this.getToken();
        return token && token.expires_at && token.expires_at > new Date().getTime();
    }


}
