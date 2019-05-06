
// let vuelo = new object ()
let vuelo = {
    arolinea : 'Oceanic',
    number : '815',
    departure : {
        claveIATA : 'SYD',
        time: '2004-09-22 14:55',
        ciudad: 'Sydney',   
        pais: 'Australia'     
    },
    arrival : {
        claveIATA : 'LAX',
        time : '2004-09-23 10:42',
        ciudad : 'Los Angeles' ,
    }
}

let datos = 'departure'
// let datos = 'arrival'

// Motación por puntos
// console.log (vuelo.number)
// console.log (vuelo.datos)

// Notcion por corchetes -> permite usar variables para los nombres de utilidades
console.log (vuelo ['number'])
console.log(vuelo[datos])


let users = ['Pepe', 'Rosa', 'Juan', 'María']
console.log(users)

// recorrer un array
for (let i = 0; i < users.length; i++) {
    const user = users[i];
    console.log(`Hola ${user}`)
}
/* {
    const user = users[0];
    console.log(`Hola ${user}`)
} */

// BUCLE DE OBJETOS
/* for (const key in vuelo) {
        const element = vuelo[key];

        if (typeof element != 'object') {
            console.log(`La propiedad ${key} vale ${element}`)  
        } else {
            for (const key in element) {
                    const item = element[key];
                    console.log(`La propiedad ${key} vale ${item}`)
            }
        }
} */

// Bien hecho en fora de función
function mostrarObjeto(obj) {
    for (const key in obj) {
            const element = obj[key];
        if (typeof element != 'object') {   
            console.log(`La propiedad ${key} vale ${element}`) 
        }
        else {
            console.log(`La propiedad ${key} vale...`)
            mostrarObjeto(element)
        }
    }
}

mostrarObjeto(vuelo)