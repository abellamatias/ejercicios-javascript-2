/*
Uso de Math para Cálculos: 
Escribe una función que reciba un número y devuelva un objeto con sus propiedades matemáticas: el cuadrado, la raíz cuadrada y el valor absoluto. 
Utiliza métodos de Math.
*/

let miNumero = 8

let propiedadesMatematicas = (numero) =>{
    let resultados = new Array(3)
    resultados[0] = Math.pow(numero, 2) 
    resultados[1] = Math.sqrt(numero)
    resultados[2] = Math.abs(numero)
    return resultados
}

let resultados=propiedadesMatematicas(miNumero)
console.log(`Cuadrado: ${resultados[0]}, Raíz cuadrada: ${resultados[1]}, Valor absoluto: ${resultados[2]}`)
