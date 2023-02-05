(() => {
    const hero: string = "El Señor de la  Noche";

    function getName(): string {
        return hero;
    }

    const activateBatiSignal = (): string => {
        return "Batiseñal activada!";
    };

    console.log(typeof(activateBatiSignal));

    const heroName = getName();
})()