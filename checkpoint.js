
// Funciones

function menorMayor(numeros) {
  // Escribi una función llamada menorMayor que tome como entrada un arreglo de números y devuelva un arreglo 
  // que contenga el menor número del arreglo en la posición cero y el mayor número del arreglo en la posición 1.
  // Ej: menorMayor([4, 6, 1, 7, 15]) // retorna [1, 15]
  var menor = numeros[0];
  var mayor = numeros[0];
  var vacio = [];
    for(i = 1; i < numeros.length; i++){
      if(menor > numeros[i]) {
        menor = numeros[i];
      }
      if(mayor < numeros[i]) {
        mayor = numeros[i];
      }
    }
    vacio = [menor, mayor]; 
  return vacio;
}

function stringMasLarga(strings) {
  // Escribe una función llamada stringMasLarga, que tome un arreglo de strings llamado 'strings'
  // tu función debe retornar el string más largo que hay en el arreglo
  // Ej:
  // stringMasLarga(['hi', 'hello', 'ni hao', 'guten tag']); // returns 'guten tag'
  // stringMasLarga(['JavaScript', 'HTML', 'CSS']); // returns 'JavaScript'
  aux = strings[0];
  for(i = 1; i < strings.length; i++){
    if(aux.length < strings[i].length){
      aux = strings[i];
    }
  }
  return aux;
}

function buscarAmigo(amigos, nombre) {
  // Escribe una funcion que reciba un array de amigos (objetos) y un nombre (string).
  // Tu función debe devolver el amigo que coincida con el nombre recibido por argumento.
  // Cada amigo tiene las propiedades nombre y edad.
  // Ej:
  //  var amigos = [{ nombre: 'toni', edad: 33 } , { nombre: 'Emi', edad: 25 }];
  //  buscarAmigo(amigos, 'toni') // retorna { nombre: 'toni', edad: 33 };
  var aux;
  for(i = 0; i < amigos.length; i++){
    if(nombre === amigos[i].nombre){
      aux = amigos[i];
      return aux;
    }
  }
  return 'no se encontró amigo';
}

function sumArray(array, n) {
  // Escribir un algoritmo que, dada un arreglo de números ordenados y un número n, 
  // te devuelva true si alguna combinación de dos números cualesquiera suman n, y devuelva false si ninguna combinación
  // de dos números sumados da como resultado el número n.
  // Ej:
  // sumArray([2,5,7,10,11,15,20], 13)  // retorna true     2+11 suman 13
  // sumArray([2,5,7,10,11,15,20], 14)  // retorna false
  // pista: podes usar bucles anidados;
  for(i = 0; i < array.length; i++){
    for(j = 1; j < array.length; j++){
      if(array[i] + array[j] === n && i!=j){
        return true;
      }
    }
  }
  return false;
};

function pluck(array, propiedad) { 
  // Escribi una función llamada pluck,
  // que recibe un array de objetos (array) y el nombre de una propiedad (propiedad).
  // La función va a devolver un nuevo arreglo con solo los
  // valores dentro de la propiedad recibida, por ejemplo:
  // var productos = [{ name: 'TV LCD', price: 100}, { name: 'Computadora', price: 500 }]
  // productos.pluck(productos, 'name') // ['TV LCD', 'Computadora']
  // pista: es una buena oportunidad para usar map.
  var respuesta = array.map(function(e){
    return e[propiedad];
  })
  return respuesta;
}

// =======================================================================


function crearClasePersona() {
  // Crear una clase para construir objeto de tipo Persona.
  // el constructor debe recibir:
  // nombre (string) , edad (integer) , hobbies (array de strings) , amigos (array de objetos)
  // Esta funcion debe retonar la clase Persona.

  class Persona {
    constructor(nombre, edad, hobbies, amigos) {
      this.nombre = nombre;
      this.edad = edad;
      this.hobbies = hobbies;
      this.amigos = amigos;
    }

    addFriend(nombre, edad) {
      // el metodo addFriend recibe un string nombre y un entero edad y debe agregar un objeto:
      // { nombre: nombre, edad: edad} al arreglo de amigos de la persona.
      // no debe retornar nada.
      var nuevoAmigo = { 
        nombre: nombre,
        edad: edad,
      }
      this.amigos.push(nuevoAmigo);
    }

    addHobby(hobby) {
      // este método debe agregar un hobby (hobby) al arreglo de hobbies de la persona.
      // no debe retornar nada.
      this.hobbies.push(hobby);
    }
    getFriends() {
      // Escribe una función que retorne un arreglo con sólo los nombres del arreglo de amigos
      // de la persona.
      // Ej:
      // persona.getFriends() // retorna ['toni', 'Leo', 'Manu']
      aux = this.amigos.map(function(e){
        return e.nombre;
      })
      return aux;
    }

    getHobbies() {
      // Escribe una función que retorne un arreglo con los hobbies de la persona
      // Ej:
      // persona.getHobbies() // retorna ['correr', 'dormir', 'nadar']
      return this.hobbies;
    }

    getPromedioEdad() {
      // Escribe una función que retorne el promedio de edad de los amigos de una persona
      // ej, si la persona tuviera estos amigos:
      // {
      //   amigos: [{
      //     nombre: 'toni',
      //     edad: 33,
      //   }, {
      //     nombre: 'Emi',
      //     edad: 25
      //   }]
      // }
      // persona.getPromedioEdad() // retorna 29
      var aux = 0;
      for(i = 0; i < this.amigos.length; i++){
        aux = aux + this.amigos[i].edad;
      }
      var resultado = aux / this.amigos.length;
      return resultado;
    }  
  };
  return Persona;
}


/* ====================== EXTRA CREDIT ===================== */
// Este ejercicio no cuenta en el puntaje del checkpoint
// pero si llegas hasta aca y lo haces quiere decir que venis super bien!

function filtrar(funcion) {
  // Escribi una función filtrar en el prototipo de Arrays,
  // que recibe una funcion (callback) que devuelve true o false.
  // filtrar los elementos de ese arreglo en base al resultado de esa funcion
  // comparadora, devolver un nuevo arreglo con los elementos filtrados.
  // NO USAR LA FUNCION FILTER DE LOS ARREGLOS.
  // ej:
  // var productos = [{
  //   price: 100,
  //   name: 'tv'
  // }, {
  //   price: 50,
  //   name: 'phone'
  // }, {
  //   price: 30,
  //   name: 'lamp'
  // }]
  // productos.filtrar(function(p) {
  //   return p.price >= 50;
  // }) => [{price: 100, name:'tv'}]

};

// No modifiques nada debajo de esta linea
// 
module.exports = {
  sumArray,
  menorMayor,
  stringMasLarga,
  buscarAmigo,
  pluck,
  crearClasePersona,
  filtrar
}