angular.module('lalocespedes').run(['$templateCache', function($templateCache) {$templateCache.put('main/views/main.html','<div class="container"><div class="col-xs-4"><div class="panel panel-default"><div class="panel-body"><div><a href="#" class="thumbnail"><img src="https://s.gravatar.com/avatar/877ab000684a00890a112db0eb753c6a?s=280"></a></div><div class="text-right"><span style="font-size: x-large;">Eduardo Cespedes Carrera</span> <small style="display: inline-block;">Autodicacta Web PHP HTML JAVASCRIPT</small><div style="margin-top: 35px;"><p>Matehuala, San Luis Potosi <i class="fa fa-location-arrow" style="margin-left: 10px;"></i></p><p>(52) 4442575745 <i class="fa fa-mobile" style="margin-left: 10px; font-size: x-large;"></i></p><p>lalocespedes.github.io <i class="fa fa-globe" style="margin-left: 10px;"></i></p><p>youtube.com/lalocespedes <i class="fa fa-youtube" style="margin-left: 10px; font-size: x-large;"></i></p><p>@suenachido <i class="fa fa-twitter" style="margin-left: 10px;"></i></p><p style="font-weight: bold;">lalocespedes@gmail.com <i class="fa fa-at" style="margin-left: 10px;"></i></p></div><div><button ng-click="vm.print()" type="button" class="btn btn-info hidden-print"><i class="fa fa-print"></i> Print</button> <button ng-click="vm.downloadpdf()" type="button" class="btn btn-success hidden-print"><i class="fa fa-download"></i> Download</button> <button type="button" class="btn btn-warning hidden-print"><i class="fa fa-address-card-o"></i> Vcard</button></div></div></div></div><div class="panel panel-default"><div class="panel-heading"><h3 class="panel-title"><i class="fa fa-github"></i> Github</h3></div><div class="panel-body"></div><ul class="list-group"><a style="cursor: pointer;" ng-click="vm.gitclick(\'https://github.com/lalocespedes/cfdimx\')" class="list-group-item"><i class="fa fa-book" aria-hidden="true"></i> cfdimx - <small>php library to create CFDI xml</small></a> <a style="cursor: pointer;" ng-click="vm.gitclick(\'https://github.com/lalocespedes/finkok\')" class="list-group-item"><i class="fa fa-book" aria-hidden="true"></i> finkok - <small>php library conector to finkok service</small></a></ul></div></div><div class="col-xs-8"><p class="lead">About Me</p><div class="well"><code>&lt;print "Hello world";&gt;</code> my name is Eduardo Cespedes Carrera was born on April 16 1978 at villahermosa Tabasco Mexico. I am husband and dad of two beautiful princess. I have been coding professionally for more than 8 years.<blockquote style="margin-top: 10px;"><p>My goal is to make everyone else\'s job easier without you really knowing I\'m there.</p></blockquote></div><p class="lead">Work Experience</p><div class="panel panel-default"><div class="panel-body"><div class="well well-sm"><span style="display: block;"><strong class="text-warning">Empresa:</strong> COMPUPRICE</span> <span style="display: block;"><strong>Cargo:</strong> Supervisor del \xE1rea de servicio t\xE9cnico.</span> <span style="display: block;"><strong>Responsabilidades y tareas principales:</strong><ul><li>Diagnostico y evaluaci\xF3n del equipo de computo defectuoso, reparaci\xF3n, darle seguimiento a las garant\xEDas.</li><li>Responsable del \xE1rea de impresoras determinando Inventario, stock m\xEDnimo en el almac\xE9n para realizar los pedidos correspondientes.</li></ul></span> <span style="display: block;"><strong>Fecha de inicio de labores:</strong> Octubre del 2000.</span> <span style="display: block;"><strong>Duraci\xF3n en la empresa:</strong> 8 meses</span> <span style="display: block;"><strong>Motivo de renuncia:</strong> Intereses propios</span></div><div class="well well-sm"><span style="display: block;"><strong class="text-warning">Empresa:</strong> Matemexico SA DE CV</span> <span style="display: block;"><strong>Cargo:</strong> Supervisor del \xE1rea de servicio t\xE9cnico.</span> <span style="display: block;"><strong>Responsabilidades y tareas principales:</strong><ul><li>Administracion de Usuarios, Administraci\xF3n de Software est\xE1ndar (windows server / active directory).</li><li>Administraci\xF3n de Equipo de Computo, Red, y sistema telefonico.</li><li>Control Remoto de fallas y asistencia a los usuarios utilizando Proxy Master. (escritorio remoto)</li><li>Administracion de licencias sofwate e instalacion de software standar (TIVOLI)</li></ul></span> <span style="display: block;"><strong>Fecha de inicio de labores:</strong> Abril del 2014.</span> <span style="display: block;"><strong>Duraci\xF3n en la empresa:</strong> 4 a\xF1os</span> <span style="display: block;"><strong>Motivo de renuncia:</strong> Cierre de operaciones de la empresa a nivel corporativo.</span></div><div class="well well-sm"><span style="display: block;"><strong class="text-warning">Empresa:</strong> Refacciones Neumaticas La Paz, S.A. DE C.V</span> <span style="display: block;"><strong>Cargo:</strong> Encargado de Departamento de Sistemas.</span> <span style="display: block;"><strong>Responsabilidades y tareas principales:</strong><ul><li>Administracion de Usuarios, Administraci\xF3n de Software est\xE1ndar (windows server / active directory).</li><li>Control de entorno de red y accesos a internet. (JUNIPER)</li><li>Implementacion de servidor LAMP en debian</li><li>Desarrolo de API para factura electronica (Slim PHP)</li><li>Desarrolo de aplicaciones para uso interno mediante tecnoligias web.</li><li>Desarrollo e implementacion de interfaz para CFDI SAT.</li></ul><span style="display: block;"><strong>Fecha de inicio de labores:</strong> Enero del 2009.</span> <span style="display: block;"><strong>Duraci\xF3n en la empresa:</strong> 7 a\xF1os</span></span></div></div></div><p class="lead">Education</p><div class="panel panel-default"><div class="panel-body"><span style="display: block;"><strong class="text-warning">Nivel de estudios:</strong> <span style="display: block;">9\xBA Semestre Lic. en Contaduria</span> <span style="display: block;">Universidad Autonoma de San Luis Potosi</span> <span style="display: block;">Titilaci\xF3n: Carrera Trunca</span></span></div></div><p class="lead">Professional skills</p><div class="panel panel-default"><div class="panel-body"><strong class="text-warning">Languages:</strong> <span style="display: block;">Php, Html, CSS, JavaScript, SQL, Git, Nodejs.</span> <strong class="text-warning">Development Tools:</strong> <span style="display: block;">Netbeans IDE, Sublime Text, PHPStorm, Atom, Visual studio code, Github desktop, SourceTree (bitbucket), Gitkraken.</span> <strong class="text-warning">Operating systems:</strong> <span style="display: block;">Windows (desktop and server), Linux (desktop and server), Mac OS X.</span> <strong class="text-warning">Frameworks:</strong> <span style="display: block;">Codeigniter - Jquery - Laravel - Angular JS - Npm - Bower - Gulp - Slim PHP</span></div></div><p class="lead">Interests</p><div class="panel panel-default"><div class="panel-body"><p>Luckily, I have a job that virtually demands that I continue learning. So i spend much time reading blogs about web technologies.</p><p>I like to get outdoors with family.</p><p>Im music lover. Even when working i listen music for relax</p></div></div></div></div>');}]);