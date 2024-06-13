/*
Clases y Métodos: Define una clase Rectangle que tenga dos propiedades width y height.
Incluye métodos para calcular el área y el perímetro del rectángulo.
*/

class Rectangle{
    constructor(width, height){
        this.width=width
        this.height=height
    }
    area(){
        return this.width * this.height
    }
    perimetro(){
        return 2*this.width+2*this.height
    }
}

let miRectangulo= new Rectangle( 3, 5)

console.log(`Perímetro: ${miRectangulo.perimetro()}, Area: ${miRectangulo.area()}`)
