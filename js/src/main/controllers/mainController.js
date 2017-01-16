(function() {
'use strict';

    angular
        .module('lalocespedes')
        .controller('MainController', MainController);

    MainController.inject = ['$log', '$window'];
    function MainController($log, $window) {
        var vm = this;
        
        $log.info("Wellcome XXI");

        activate();

        ////////////////

        function activate() {
            

            vm.gitclick = function (href) {

                $window.open(href , 'popup', "width=800,height=600,left=10,top=150");

            };

            vm.print = function () {

                    print();
                    close();

            };

        }
    }
})();
