'use strict';

export default class HeaderCtrl {

  constructor($timeout, $mdSidenav) {
    this.text = 'header text';
    this.$timeout = $timeout;
    this.$mdSidenav = $mdSidenav;
  }

  openMenu() {
    this.$timeout(() => this.$mdSidenav('menu-left').open());
  }
}
