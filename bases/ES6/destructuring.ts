(() => {
    interface Avengers {
        nick: string;
        ironman: string;
        vision: string;
        activo: boolean;
        poder: number;
    }

    const avengers: Avengers = {
        nick: "Samuel L. Jackson",
        ironman: "Robert Downey Jr.",
        vision: "Paul Bettany",
        activo: true,
        poder: 1500.125789
    };

    //* Desestructuración de Objetos
    const { poder, vision } = avengers;
    // console.log(poder.toFixed(2), vision.toUpperCase());

    const printAvenger = ({ ironman, ...resto }: Avengers): void => {
        console.log(ironman, resto);
    };
    // printAvenger(avengers);

    //* Desestructuración de Arreglos y Tuplas
    const avengersTuple: [string, boolean, number] = ["Cap. América", true, 150.257589];
    const [ capitan, isAdmin, power ] = avengersTuple;
    // console.log(capitan.toUpperCase(), isAdmin, power.toFixed(2));
})()