(function () {

    'use strict';

    angular.module('lalocespedes')
        .config(stateConfig);

    function stateConfig(
        $stateProvider,
        $urlRouterProvider
    ) {

        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state('main', {
                url: '/',
                controller: 'MainController',
                controllerAs: 'vm',
                templateUrl: 'main/views/main.html'
            });
    }
    
})();
