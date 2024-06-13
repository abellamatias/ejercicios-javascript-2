/*
Uso de for y Cadenas: Crea una función que reciba una cadena y devuelva una nueva cadena con las vocales en mayúsculas. 
Utiliza un bucle for para iterar sobre los caracteres de la cadena.
*/

let miCadena = "Hola, mundo!"

let vocalesEnMayusculas = (cadena) => {
    let vocales = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
    for(let i=0 ; i < cadena.length ; i++){
        let letra = cadena.charAt(i)
        if(vocales.includes(letra)){
            cadena = cadena.substring(0, i) + letra.toUpperCase() + cadena.substring(i + 1);
        }
    }
    return cadena;
}

console.log(vocalesEnMayusculas(miCadena))