(function () {
    'use strict';

    angular
        .module('lalocespedes')
        .controller('MainController', MainController);

    MainController.inject = ['$log', '$window', 'FileSaver', 'Blob', '$http'];
    function MainController($log, $window, FileSaver, Blob, $http) {
        var vm = this;

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

                $http.get('http://lalocespedes.github.io//lalocespedes.pdf',{
                    responseType: 'arraybuffer'
                }).then(function (response) {

                    // $log.debug(response.data);

                    var blob = new Blob([response.data], { response: "application/pdf" });
                    FileSaver.saveAs(blob, "lalocespedes.pdf");
                });

            };
        }
    }

})();
