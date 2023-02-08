(() => {
    //* Note el Patrón de declaración para las Interfaces en TypeScript
    interface Client {
        name: string;
        age?: number;
        address: Address;
        getFullAddress(id: string): string;
    }

    interface Address {
        id: number;
        zip: string;
        city: string;
    }

    const client: Client = {
        name: "Gustavo",
        age: 25,
        address: {
            id: 125,
            zip: "KY2 SUD",
            city: "Tacna"
        },
        getFullAddress(id: string) {
            return this.address.city;
        }
    };

    const client2: Client = {
        name: "Melissa",
        age: 28,
        address: {
            city: "Tacna",
            id: 120,
            zip: "K2S U2A"
        },
        getFullAddress(id: string) {
            return this.address.city;
        }
    };

    //* console.log({client, client2});
})()