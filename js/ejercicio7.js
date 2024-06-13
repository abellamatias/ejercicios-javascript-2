/*
Uso de for y Arrays: Escribe una función que reciba dos arrays de la misma longitud y devuelva un nuevo array con la suma de los elementos correspondientes. 
Utiliza un bucle for para iterar sobre los índices de los arrays.
 */

let miArreglo1 = [0, 1, 2, 3, 4]
let miArreglo2 = [5, 6, 7, 8, 9]

let sumaArreglos=(arreglo1, arreglo2) =>{
    let arregloslength = arreglo1.length
    let arregloSuma = new Array(arregloslength)
    for(let i=0;i<arregloslength; i++){
        arregloSuma[i] = arreglo1[i] + arreglo2[i]
    }
    return arregloSuma
}

let arregloSuma = sumaArreglos(miArreglo1, miArreglo2)
console.log(`Arreglos sumados: ${arregloSuma}`)
