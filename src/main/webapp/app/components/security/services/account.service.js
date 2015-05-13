'use strict';

export default class AccountService {

    constructor($resource) {
        this.$resource = $resource;
    }

    resource() {
        return this.$resource('api/account');
    }
}