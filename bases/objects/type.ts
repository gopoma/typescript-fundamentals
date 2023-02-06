(() => {
    type SuperHero = {
        name: string,
        age?: number,
        powers: string[],
        getName?: () => string
    };

    type Hero = {
        name: string;
        age?: number;
        powers: string[],
        getName?: () => string
    };

    let flash: Hero = {
        name: "Barry Allen",
        age: 25,
        powers: ["Super velocidad", "Viajar en el tiempo"]
    };

    let anthony: Hero = {
        name: "Anthony",
        age: 28,
        powers: ["Super velocidad"],
        getName() {
            return this.name;
        }
    };
    console.log(anthony.getName?.());
})()