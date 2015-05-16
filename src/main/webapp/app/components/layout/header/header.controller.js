'use strict';

export default class HeaderCtrl {

    constructor($timeout, $mdSidenav, authService, authorize) {
        this.$timeout = $timeout;
        this.$mdSidenav = $mdSidenav;
        this.authService = authService;
        this.username = authorize.login;
    }

    openMenu() {
        this.$timeout(() => this.$mdSidenav('menu-left').open());
    }

}
