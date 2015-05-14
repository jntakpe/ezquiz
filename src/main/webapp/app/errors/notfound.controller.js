'use strict';

export default class NotFoundCtrl {

    constructor($state) {
        this.$state = $state;
    }

    goHomepage() {
        this.$state.go('main.home');
    }
}
