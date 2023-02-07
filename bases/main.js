"use strict";
// Crear interfaces
const conducirBatimovil = (auto) => {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelerar();
};
const batimovil = {
    encender: false,
    velocidadMaxima: 0,
    acelerar() {
        console.log("...... gogogo!!!");
    }
};
const guason = {
    reir: true,
    comer: true,
    llorar: false
};
const reir = (guason) => {
    if (guason.reir) {
        console.log("JAJAJAJA");
    }
};
const ciudadGotica = (ciudadanos) => {
    return ciudadanos.length;
};
var Sexo;
(function (Sexo) {
    Sexo[Sexo["MASCULINO"] = 0] = "MASCULINO";
    Sexo[Sexo["FEMENINO"] = 1] = "FEMENINO";
})(Sexo || (Sexo = {}));
var EstadoCivil;
(function (EstadoCivil) {
    EstadoCivil[EstadoCivil["SOLTERO"] = 0] = "SOLTERO";
    EstadoCivil[EstadoCivil["CASADO"] = 1] = "CASADO";
})(EstadoCivil || (EstadoCivil = {}));
class Persona {
    constructor(nombre, edad, sexo, estadoCivil) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.estadoCivil = estadoCivil;
    }
    imprimirBio() {
        console.log(`[Common] ${this.nombre}`);
    }
}
(() => {
    const flash = {
        name: "Barry Allen",
        age: 25,
        powers: ["Super velocidad", "Viajar en el tiempo"]
    };
    const anthony = {
        name: "Anthony",
        age: 28,
        powers: ["Super velocidad"],
        getName() {
            return `[SuperHero] ${this.name}`;
        }
    };
    // console.log(anthony.getName?.());
})();
//# sourceMappingURL=main.js.map