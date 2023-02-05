"use strict";
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
