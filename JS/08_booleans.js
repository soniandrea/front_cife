/* 

Condicionales en JS

if(condicion) {
    //codigo
}

if(condicion) {
    // codigo A
} else {
    //codigo B
}

if(cnodicion) {
    // codigo A
} else if (condicion2){
    // codigo B
} else {
    //codigo C
} 

*/

let x = 3
x = 5
x = '3'

// Comparacion igual ==
// Comparación idéntico (en valor y tipo) ===
// Comparacion distinto !=
// Comparación no-idéntico !==

// Casting a boolean
//Valores falsy -> false
    x=false
    x= undefined
    x = ''
    x = NaN
    x = Infinity
    x = 0
    x = null
//Valores truly ->true
    x = true
    x = 25
    x = 'Pepe'
    x = {}
    x = []
    x = function () {}

if ( x ) { 
    console.log('Es verdadero')
} else {
    console.log ('Es falso')
}
