(() => {
    const addNumbers = (a: number, b: number): number => a + b;
    const greet = (displayName: string): string => `Hello ${displayName}!`;

    let myFunction: Function;

    //! myFunction = 10;
    //! console.log({myFunction});

    myFunction = addNumbers;
    console.log(myFunction(10, 11));

    myFunction = greet;
    console.log(myFunction("Gustavo"));

    let myFunction2: (x: number, y: number) => number;

    myFunction2 = addNumbers;
    //! myFunction2 = greet;

    const saveTheWorld = () => undefined;

    let myFunction3: () => void;
    myFunction3 = saveTheWorld;
})()