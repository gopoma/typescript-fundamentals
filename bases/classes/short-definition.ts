(() => {
    class Avenger {
        public static avgAge: number = 30;

        constructor(
            private name: string,
            private team: string,
            public realName?: string
        ) {
            Avenger.avgAge = 70;
        }
    }

    console.log(Avenger.avgAge);
    const antman = new Avenger("Antman", "Capitan", "Scott Lang");
    console.log(Avenger.avgAge);
    console.log(antman);
})()