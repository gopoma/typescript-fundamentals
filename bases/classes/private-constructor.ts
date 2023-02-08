(() => {
    class Apocalipsis {
        public static instance: Apocalipsis;

        private constructor(public name: string) {}

        public static callApocalipsis(): Apocalipsis {
            if(!Apocalipsis.instance) {
                Apocalipsis.instance = new Apocalipsis("Apocalipsis");
            }
            return Apocalipsis.instance;
        }

        public changeName(newName: string): void {
            this.name = newName;
        }
    }

    //* Implementación del Patrón de Diseño Singleton
    const apocalipsis1 = Apocalipsis.callApocalipsis();
    const apocalipsis2 = Apocalipsis.callApocalipsis();
    const apocalipsis3 = Apocalipsis.callApocalipsis();

    //* apocalipsis1.changeName('Gustavo');

    // const apocalipsis1 = new Apocalipsis('Soy Apocalipsis1... el único')
    // const apocalipsis2 = new Apocalipsis('Soy Apocalipsis2... el único')
    // const apocalipsis3 = new Apocalipsis('Soy Apocalipsis3... el único')

    console.log(apocalipsis1, apocalipsis2, apocalipsis3);
})()