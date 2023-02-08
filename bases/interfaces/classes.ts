(() => {
    interface Xmen {
        name: string;
        realName: string;
        mutantPower(id: number): string;
    }

    interface Human {
        age: number;
    }

    class Mutant implements Xmen, Human {
        constructor(
            public age: number,
            public name: string,
            public realName: string
        ) {}

        public mutantPower(id: number) {
            return `${this.name} ${this.realName}`;
        }
    }
    const magneto = new Mutant(25, "Magneto", "Magnus");
    //* console.log(magneto);
    //* console.log(magneto.mutantPower());
})()