/*
Manipulación de Strings: Crea una función que reciba una cadena y devuelva la misma cadena con las palabras en orden inverso. 
Utiliza métodos de manipulación de cadenas y arrays.
*/

let miPalabra = "Hola, mundo!"

let invertirPalabra=(palabra) => {
    let lengthPalabra = palabra.length
    let nuevaPalabra = new Array(lengthPalabra)
    let contadorInverso = lengthPalabra-1
    for (let i=0; i< lengthPalabra; i++){
        nuevaPalabra[i] = palabra[contadorInverso]
        contadorInverso--
    }
    return nuevaPalabra.join("")
}

console.log(`La cadena en orden inverso es: ${invertirPalabra(miPalabra)}`)