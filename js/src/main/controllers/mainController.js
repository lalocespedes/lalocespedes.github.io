(function() {
'use strict';

    angular
        .module('lalocespedes')
        .controller('MainController', MainController);

    MainController.inject = ['$log'];
    function MainController($log) {
        var vm = this;
        
        $log.info("Wellcome XXI");

        activate();

        ////////////////

        function activate() {
            
        }
    }
})();
