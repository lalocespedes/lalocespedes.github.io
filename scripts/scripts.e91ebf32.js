"use strict";angular.module("meApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).otherwise({redirectTo:"/"})}]),angular.module("meApp").controller("MainCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("meApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("meApp").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/main.html",'<div id="header_wrapper"> <br> <div class="row"> <div class="col-md-7 col-sm-offset-1"> <h1>Eduardo Cespedes Carrera</h1> <div class="col-md-4"> <img src="http://www.gravatar.com/avatar/eae2041ebd6d5fe3bc6b3d6fb5e570ad?s=200&d=&r=G" class="img-responsive img-thumbnail" alt=""> </div> <div class="col-md-8"> <h2> WEB Developer</h2> Me gusta crear cosas con valor para el mundo, cosas que pueda usar la gente y usarlas para bien. <p> Con una experiencia de mas de 10 años en el desarrollo de apliciones web. </p> </div> </div> <div class="col-md-3 col-sm-offset-1"> Datos de Contacto </div> </div> </div>')}]);