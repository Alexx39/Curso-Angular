angular.module('enrutamiento',['ngRoute'])
.config(function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl: 'Voto/indexxx.html',
        controller: 'MainController'
    })
    .when('/contactenos', {
        templateUrl: 'paginas/contactenos.html',
        controller: 'ContactenosController'
    })
    .when('/nosotros',{
        templateUrl: 'paginas/nosotros.html',
        controller: 'NosotrosController'
    })
    .otherwise({
        redirectTo: '/'
    });


})
.controller('MainController', function($scope,ContactosService){
   
    $scope.contactos = ContactosService.obtenerContactos();
 
    $scope.guardarContacto = function (nuevoContacto) {
        if (nuevoContacto.nombre == null) {
            
        } else {
            ContactosService.guardar($scope.nuevoContacto);
            $scope.nuevoContacto = {};
        }
    }
 
    $scope.borrar = function (id) {
        ContactosService.borrar(id);
        if ($scope.nuevoContacto.id == id){
            $scope.nuevoContacto = {};
        }
    }
 
    $scope.editar = function (id) {
        $scope.nuevoContacto = angular.copy(ContactosService.obtenerContacto(id));
    }

    $scope.xx = function(nuevoContacto){
        if (nuevoContacto.nombre.length < 3) {
            return true;
        } else {if (nuevoContacto.nombre.length > 15) {
                return true;
            } else {
                if (nuevoContacto.voto == null) {
                    return true;
                } else {
                    if (nuevoContacto.telefono != null) {
                        if (nuevoContacto.telefono.length != 10 ) {
                            return true;
                        } else {
                            return false;
                        }
                    } else {
                        return false;
                    }
                }
            }

        }


    }

})
.controller('ContactenosController', function($scope){
    $scope.texto = "Por favor mandenos un correo a xx@xxx.com";
})
.controller('NosotrosController', function($scope){
    $scope.texto = "Esta es nuestra pagina!";
})
.service('ContactosService', function () {
    var numContactos = 1;
     
    var contactos = [{
        id: 0,
        nombre: 'Alex Castañeda',
        correo: 'alex@gmail.com',
        telefono: '3225934585',
        voto: 'Lina'
    }];
    
    this.obtenerContactos = function () {
        return contactos;
    }
     
    this.guardar = function (contacto) {
        if (contacto.id == null) {
            contacto.id = numContactos++;
            contactos.push(contacto);
        } else {
            for (i in contactos) {
                if (contactos[i].id == contacto.id) {
                    contactos[i] = contacto;
                }
            }
        }
    }

    
    this.borrar = function (id) {
        for (i in contactos) {
            if (contactos[i].id == id) {
                contactos.splice(i, 1);
            }
        }
    }
 
    this.obtenerContacto = function (id) {
        for (i in contactos) {
            if (contactos[i].id == id) {
                return contactos[i];
            }
        }
    }

})
.directive('directiva', function(){
    // Runs during compile
    return {
        restrict: 'AECM',
        templateUrl: 'directivas/midire.html',
        replace: true 
        
    };
})

