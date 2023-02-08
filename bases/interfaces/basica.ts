(() => {
    interface SuperHero {
        name: string;
        age?: number;
        powers: number[];
        getName?: () => string;
    }

    const flash: SuperHero = {
        name: "Barry Allen",
        age: 25,
        powers: [1, 2]
    };

    const anthony: SuperHero = {
        name: "Anthony",
        age: 28,
        powers: [1],
        getName() {
            return `[SuperHero] ${this.name}`;
        }
    };
    // console.log(anthony.getName?.());
})()