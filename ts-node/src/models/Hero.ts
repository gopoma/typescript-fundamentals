import powers, { Power } from "../data/powers";

export class Hero {
    constructor(
        private name: string,
        private idPower: number,
        private age: number
    ) {}

    get power(): string {
        //* El operador ! indica a TypeScript que confie en que el valor nunca será undefined
        //* return powers.find((power: Power) => power.id == this.idPower)!.desc ?? "Not Found";
        return powers.find((power: Power) => power.id == this.idPower)?.desc ?? "Not Found";
    }
}