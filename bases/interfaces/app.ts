// Crear interfaces

// Cree una interfaz para validar el auto (el valor enviado por parametro)
interface Car {
    encender: boolean;
    velocidadMaxima: number;
    acelerar(): void
}

const conducirBatimovil = (auto: Car): void => {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelerar();
}
  
const batimovil: Car = {
    encender: false,
    velocidadMaxima: 0,
    acelerar() {
        console.log("...... gogogo!!!");
    }
}
  
// Cree una interfaz con que permita utilizar el siguiente objeto
// utilizando propiedades opcionales

interface Villain {
    reir?: boolean;
    comer?: boolean;
    llorar?: boolean;
}

const guason: Villain = {
    reir: true,
    comer: true,
    llorar: false
}
  
const reir = (guason: Villain): void => {
    if(guason.reir){
        console.log("JAJAJAJA");
    }
}
  
  
// Cree una interfaz para la siguiente funcion
  
interface CountCitizens {
    (ciudadanos: string[]): number
}

const ciudadGotica: CountCitizens = (ciudadanos: string[]): number => {
    return ciudadanos.length;
}
  
// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/

interface IPersona {
    nombre: string;
    edad: number;
    sexo: Sexo;
    estadoCivil: EstadoCivil;
    imprimirBio(): void;
}

enum Sexo {
    MASCULINO,
    FEMENINO
}

enum EstadoCivil {
    SOLTERO,
    CASADO
}

class Persona implements IPersona {
    constructor(
        public nombre: string,
        public edad: number,
        public sexo: Sexo,
        public estadoCivil: EstadoCivil
    ) {}

    imprimirBio() {
        console.log(`[Common] ${this.nombre}`);
    }
}