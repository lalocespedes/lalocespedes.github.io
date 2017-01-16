(function () {
    'use strict';

    angular
        .module('lalocespedes')
        .controller('MainController', MainController);

    MainController.inject = ['$log', '$window', 'FileSaver', 'Blob'];
    function MainController($log, $window, FileSaver, Blob) {
        var vm = this;

        $log.info("Wellcome XXI");

        activate();

        ////////////////

        function activate() {

            vm.gitclick = function (href) {

                $window.open(href, 'popup', "width=800,height=600,left=10,top=150");

            };

            vm.print = function () {

                print();
                close();

            };

            vm.downloadpdf = function () {

                $http.get('').then(function (response) {
                    var blob = new Blob([data], { response: "application/pdf" });
                    FileSaver.saveAs(blob, "lalocespedes.pdf");
                });

            };

        }
    }

})();
