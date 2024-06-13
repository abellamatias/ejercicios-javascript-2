/*
Uso de for...of con Objetos: 
Escribe una función que reciba un objeto con propiedades de alumnos y sus notas (por ejemplo, {Juan: 8, Maria: 9, Pedro: 7}) y devuelva el promedio de las notas. 
Utiliza un bucle for...of para iterar sobre los valores del objeto.
*/

class Alumno{
    constructor(nombre, nota){
        this.nombre=nombre
        this.nota = nota
    }
    getNota(){
        return this.nota
    }
}

let miArregloAlumnos = [new Alumno("Juan", 8), new Alumno("María", 9), new Alumno("Pedro", 7)]

let promedioNotas = (arregloAlumnos) =>{
    let promedio=0.0
    for(let alumno of arregloAlumnos){
        promedio+= alumno.getNota()
    }
    promedio/=arregloAlumnos.length
    return promedio
}

console.log(`Promedio de las notas de los alumnos: ${promedioNotas(miArregloAlumnos)}`)