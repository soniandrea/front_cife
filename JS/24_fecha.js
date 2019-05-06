/**
 * Creamos un objeto con los nombres de los meses en español como propiedades
 * y sus equivalentes en otro idioma (ej ingles) como valor
 * y añadimos una funcion que muestre por consola la frase 
 * `El mes ... en francés se dice ...` para cada uno de los meses
 */

 let mesesEnFrances = {
     enero: 'Janvier',
     febrero: 'Février',
     marzo: 'Mars',
     abril: 'Avril',
     mayo: 'Mai',
     junio: 'Juin',
     julio: 'Juillet',
     agosto: 'Août',
     septiempre: 'Septembre',
     octubre: 'Octobre',
     noviembre: 'Novembre',
     diciembre: 'Décembre',
     toString: function () {
         let output = ''
         for (const key in this) {
             const element = this[key]
             if (typeof element === 'function') {
                 continue
             }
             output += `El mes ${key} en francés se dice ${element}` +'\n'
         }
         return output
     }, 
     mostrar: function() {
         console.log(this.toString())
     }
}

mesesEnFrances.mostrar()



