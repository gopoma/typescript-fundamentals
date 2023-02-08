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
        powers: [1, 2]
    };
    const anthony = {
        name: "Anthony",
        age: 28,
        powers: [1],
        getName() {
            return `[SuperHero] ${this.name}`;
        }
    };
    // console.log(anthony.getName?.());
})();
(() => {
    class Mutant {
        constructor(age, name, realName) {
            this.age = age;
            this.name = name;
            this.realName = realName;
        }
        mutantPower(id) {
            return `${this.name} ${this.realName}`;
        }
    }
    const magneto = new Mutant(25, "Magneto", "Magnus");
    //* console.log(magneto);
    //* console.log(magneto.mutantPower());
})();
(() => {
    const client = {
        name: "Gustavo",
        age: 25,
        address: {
            id: 125,
            zip: "KY2 SUD",
            city: "Tacna"
        },
        getFullAddress(id) {
            return this.address.city;
        }
    };
    const client2 = {
        name: "Melissa",
        age: 28,
        address: {
            city: "Tacna",
            id: 120,
            zip: "K2S U2A"
        },
        getFullAddress(id) {
            return this.address.city;
        }
    };
    //* console.log({client, client2});
})();
(() => {
    let addNumbersFunction;
    addNumbersFunction = (a, b) => {
        return 25;
    };
})();
//# sourceMappingURL=main.js.map