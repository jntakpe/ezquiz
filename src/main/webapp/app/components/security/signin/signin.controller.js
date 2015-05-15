'use strict';

export default class SigninCtrl {

    constructor($rootScope, $state, $mdToast, authService) {
        this.$rootScope = $rootScope;
        this.$state = $state;
        this.$mdToast = $mdToast;
        this.authService = authService;
        this.user = {};
        this.error = false;
        authService.logout();
    }

    login() {
        this.authService.login({
            username: this.user.username,
            password: this.user.password
        }).then(() => {
            this.error = false;
            if (this.$rootScope.previousStateName === 'register') {
                this.$state.go('main.home');
            } else {
                this.$rootScope.back();
            }
        }, () => {
            this.user = {};
            this.$mdToast.show(this.$mdToast.simple().content('Invalid credentials').position('top'));
        });
    }
}
