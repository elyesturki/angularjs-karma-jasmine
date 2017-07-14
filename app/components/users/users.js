/* eslint-disable no-invalid-this */
(function(ng) {
    'use strict';

    // Define the component and controller we loaded in our test
    ng.module('components.users', [])
    .controller('UsersController', ['Users', function(Users) {
        let vm = this;
        // Call all() and set it to users
        Users.all().then(function(result) {
            vm.users = result;
        });
    }])
    .config(function($stateProvider) {
        $stateProvider
        .state('users', {
            url: '/users',
            templateUrl: 'components/users/users.html',
            controller: 'UsersController as uc',
        });
    });
})(angular);
