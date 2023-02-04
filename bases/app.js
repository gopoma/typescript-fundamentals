"use strict";
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
