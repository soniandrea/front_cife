/**
 * Notación literal o JSON
 */

 // user1 = new Usuario
 // user2 = new Usuario

let user1 = {
    nombre: 'Pepe',
    edad: 24,
    isAlumno: true,
    direccion: {
        calle: 'Pez',
        num: '3',
        poblacion: 'Madrid'
    },
    saludar: function () {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`)
    },
    altura: 179
}
// let user1 = new object() --> crea una zona de memoria, se llama funión constructiva porque lleva el new por delante. No es necesario poner " new object"
// La clase es un molde fijo y let es un prototipo variable.
// un objeto son coleccion de propiedad y puede ser de diferetes tipos
// user1.nombre: 'Pepe'

let user2 = {
    nombre: 'Rosa',
    edad: 27,
    curso: 'Front'
}

user1.nombre = 'Jose'
user1.curso = 'Back'

user1.saludar ()

