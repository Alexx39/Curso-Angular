angular.module('contactos',[])
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
 
.controller('ContactosController', function ($scope, ContactosService) {


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
                    return false;
                }
            }

        }
    }


})
.controller('HelperController', function($scope, ContactosService){
    $scope.inf = function(){

    }
})