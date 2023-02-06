"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Funciones Básicas
function sumar(a, b) {
    return a + b;
}
const contar = (heroes) => {
    return heroes.length;
};
const heroe = ["El Señor de la Noche", 100, true];
const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);
//Parametros por defecto
const llamarBatman = (llamar = false) => {
    if (llamar) {
        console.log("Batiseñal activada");
    }
};
llamarBatman();
// Rest?
const unirheroes = (...personas) => {
    return personas.join(", ");
};
// Tipo funcion
const noHaceNada = (numero, texto, booleano, arreglo) => { };
// Crear el tipo de funcion que acepte la funcion "noHaceNada"
let noHaceNadaTampoco;
noHaceNadaTampoco = noHaceNada;
(() => {
    const generateFullname = (firstName, lastName, upper = false) => {
        const fullname = `${firstName} ${lastName || "____"}`;
        return (upper) ? fullname.toUpperCase() : fullname;
    };
    const fullname = generateFullname("Gustavo", "Ordoño", true);
    console.log({ fullname });
})();
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (displayName) => `Hello ${displayName}!`;
    let myFunction;
    //! myFunction = 10;
    //! console.log({myFunction});
    myFunction = addNumbers;
    console.log(myFunction(10, 11));
    myFunction = greet;
    console.log(myFunction("Gustavo"));
    let myFunction2;
    myFunction2 = addNumbers;
    //! myFunction2 = greet;
    const saveTheWorld = () => undefined;
    let myFunction3;
    myFunction3 = saveTheWorld;
})();
(() => {
    const hero = "El Señor de la  Noche";
    function getName() {
        return hero;
    }
    const activateBatiSignal = () => {
        return "Batiseñal activada!";
    };
    console.log(typeof (activateBatiSignal));
    const heroName = getName();
})();
(() => {
    const generateEmail = (username, group) => {
        return `${username}@${group || "default"}.edu.pe`;
    };
    const email = generateEmail("gopoma");
    console.log({ email });
})();
(() => {
    const getFullname = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const displayName = getFullname("Gustavo", "Ordoño");
    console.log({ displayName });
})();
(() => {
    const generateFullname = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(" ")}`;
    };
    const displayName = generateFullname("Gustavo", "Eduardo", "Ordoño", "Poma");
    console.log({ displayName });
})();
const batimovil = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros: 4
};
const bumblebee = {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros: 4,
    disparar() {
        console.log("Disparando");
    }
};
// Villanos debe de ser un arreglo de objetos personalizados
const villanos = [
    {
        nombre: "Lex Luthor",
        edad: 54,
        mutante: false
    },
    {
        nombre: "Erik Magnus Lehnsherr",
        edad: 49,
        mutante: true
    },
    {
        nombre: "James Logan",
        edad: undefined,
        mutante: true
    }
];
const charles = {
    poder: "psiquico",
    estatura: 1.78
};
const apocalipsis = {
    lider: true,
    miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
};
// Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
let mystique;
mystique = charles;
console.log({ mystique });
mystique = apocalipsis;
console.log({ mystique });
(() => {
    var _a;
    let flash = {
        name: "Barry Allen",
        age: 25,
        powers: ["Super velocidad", "Viajar en el tiempo"]
    };
    flash = {
        name: "Clark Kent",
        //* age: 75,
        powers: ["Super fuerza"],
        getName() {
            return this.name;
        }
    };
    console.log((_a = flash.getName) === null || _a === void 0 ? void 0 : _a.call(flash));
})();
(() => {
    var _a;
    let flash = {
        name: "Barry Allen",
        age: 25,
        powers: ["Super velocidad", "Viajar en el tiempo"]
    };
    let anthony = {
        name: "Anthony",
        age: 28,
        powers: ["Super velocidad"],
        getName() {
            return this.name;
        }
    };
    console.log((_a = anthony.getName) === null || _a === void 0 ? void 0 : _a.call(anthony));
})();
(() => {
    let myCustomVariable = "Gustavo";
    console.log(typeof myCustomVariable);
    myCustomVariable = 25;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: "Patricio Estrella",
        age: 75,
        powers: [1, 2, 3],
    };
    console.log(typeof myCustomVariable);
    console.log(myCustomVariable);
})();
(() => {
    let avenger = 123;
    let exists;
    let power;
    avenger = "Dr. Strange";
    // console.log(avenger.charAt(0));
    // Casting
    console.log(avenger.charAt(0));
    avenger = 3.1416;
    console.log(avenger.toFixed(3));
    console.log(exists);
    console.log(power);
})();
(() => {
    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    // Arreglos
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    let HeroStrength;
    (function (HeroStrength) {
        HeroStrength[HeroStrength["acuaman"] = 0] = "acuaman";
        HeroStrength[HeroStrength["batman"] = 1] = "batman";
        HeroStrength[HeroStrength["flash"] = 5] = "flash";
        HeroStrength[HeroStrength["superman"] = 100] = "superman";
    })(HeroStrength || (HeroStrength = {}));
    ;
    const fuerzaFlash = HeroStrength.flash;
    const fuerzaSuperman = HeroStrength.superman;
    const fuerzaBatman = HeroStrength.batman;
    const fuerzaAcuaman = HeroStrength.acuaman;
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    const poder = '100';
    // const largoDelPoder: number = (poder as string).length;
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
(() => {
    // const numbers: (string | number | boolean)[] = [1, 2, 3, 4, 5, "6", 7, 8, 9, 10, true];
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const characters = ["Cartman", "Kyle", "Stan", "Keny"];
    characters.forEach((c) => console.log(c.toUpperCase()));
})();
(() => {
    const isAuthenticated = true;
    const isGranted = false;
    let isAdmin;
    // If we comment the next line, we got an error because isAdmin is not being assigned
    isAdmin = isAuthenticated && isGranted;
    console.log({ isAdmin });
})();
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium"] = 2] = "medium";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    ;
    let currentAudioLevel = AudioLevel.medium;
    console.log({ currentAudioLevel });
    console.log({ AudioLevel });
    let Foo;
    (function (Foo) {
        Foo[Foo["a"] = 0] = "a";
        Foo[Foo["b"] = 10] = "b";
        Foo[Foo["c"] = 11] = "c";
        Foo[Foo["d"] = 9] = "d";
        Foo[Foo["e"] = 10] = "e";
    })(Foo || (Foo = {}));
    ;
    const tmp = Foo.e;
    console.log(tmp); // 10
})();
(() => {
    const throwError = true;
    const url = (throwError) ? "gopoma" : "https://jsonplaceholder.typicode.com/posts";
    const getPosts = () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield fetch(url);
        if (!response.ok) {
            throw new Error("No se pudo realizar la petición de los posts");
        }
        const posts = yield response.json();
        return posts;
    });
    //* console.log(getPosts());
    const foo = () => {
        throw new Error("doesn't work");
    };
    //? foo();
})();
(() => {
    const anything = undefined;
    const anything2 = undefined;
    const anything3 = null;
    console.log({ anything, anything2, anything3 });
    //* strictNullChecks: false -> will work
    //* let isActive: boolean = null;
    let isActive;
    console.log(isActive);
    //* strictNullChecks: false -> will work
    //* let vacio: null = undefined; 
    //* console.log(vacio);
})();
(() => {
    const amountTasks = 200;
    let amountCompletedTasks = 150;
    if (amountCompletedTasks < amountTasks) {
        console.log(`Hurry up!, you've got ${amountTasks - amountCompletedTasks} remaining tasks to do`);
    }
    else {
        console.log("Congratulations, You've completed all tasks!");
    }
    const foo = Number("79RST");
    console.log("Be careful!, NaN is also a number", { foo });
})();
(() => {
    var _a;
    const name = 'Gus\'tavo';
    const name2 = "Edúardo's";
    const name3 = `Engin'eer": ${name}`;
    const username = "Cartman";
    console.log(`I'm ${username}`);
    console.log(username.toUpperCase());
    console.log((_a = username[100]) === null || _a === void 0 ? void 0 : _a.toUpperCase());
})();
(() => {
    const user = ["Locale", "gopoma", 16, true];
    user[0] = "Google";
    user[1] = "sus";
    user[2] = 25;
    user[3] = false;
    console.log({ user });
})();
(() => {
    function callback() {
        //! return true;
        return;
    }
    function callback2() {
        return undefined;
    }
    const callback3 = () => {
        console.log("callback3");
        return;
    };
    const foo = callback();
    console.log(foo);
    let foo2 = undefined;
    let foo3 = undefined;
})();
//# sourceMappingURL=main.js.map