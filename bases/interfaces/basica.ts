(() => {
    interface SuperHero {
        name: string;
        age?: number;
        powers: string[];
        getName?: () => string;
    }

    const flash: SuperHero = {
        name: "Barry Allen",
        age: 25,
        powers: ["Super velocidad", "Viajar en el tiempo"]
    };

    const anthony: SuperHero = {
        name: "Anthony",
        age: 28,
        powers: ["Super velocidad"],
        getName() {
            return `[SuperHero] ${this.name}`;
        }
    };
    // console.log(anthony.getName?.());
})()