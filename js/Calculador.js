export default class Calculador{
    constructor() {
        this.menor = 9999999;
        this.ingresos = 0;
        this.personas = 0;
    }

    procesarPer(Persona){
        ++this.personas;
        this.ingresos += Persona.ingreso;
        if (Persona.ingreso < this.menor)
        this.menor = Persona.ingreso;

    }

    promedio(){
        return this.ingresos/this.personas;
    }
}