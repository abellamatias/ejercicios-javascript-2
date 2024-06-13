/* Uso de for...of y Arrays: Escribe una función que reciba un array de números y retorne un nuevo array con cada número elevado al cuadrado. 
Utiliza un bucle for...of para iterar sobre los elementos del array.*/

let arreglo = [1, 2, 3, 4, 5]


let cuadrado = (arregloNumeros) => {
    let nuevoArreglo = new Array(arregloNumeros.length)
    let i=0
    for(let numero of arregloNumeros){
        nuevoArreglo[i] =Math.pow(arregloNumeros[i], 2)
        i++
    }
    return nuevoArreglo
}

console.log(cuadrado(arreglo))