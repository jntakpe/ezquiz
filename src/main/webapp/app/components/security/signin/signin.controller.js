'use strict';

export default class SigninCtrl {

    constructor($rootScope, $state, authService) {
        this.authService = authService;
        this.$rootScope = $rootScope;
        this.$state = $state;
        this.error = false;
        this.user = {};
    }

    login() {
        this.authService.login({
            username: this.user.username,
            password: this.user.password
        }).then(() => {
            this.error = false;
            if (this.$rootScope.previousStateName === 'register') {
                this.$state.go('home');
            } else {
                this.$rootScope.back();
            }
        });
    }
}
