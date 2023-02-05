"use strict";
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (displayName) => `Hello ${displayName}!`;
    let myFunction;
    //! myFunction = 10;
    //! console.log({myFunction});
    myFunction = addNumbers;
    console.log(myFunction(10, 11));
    myFunction = greet;
    console.log(myFunction("Gustavo"));
    let myFunction2;
    myFunction2 = addNumbers;
    //! myFunction2 = greet;
    const saveTheWorld = () => undefined;
    let myFunction3;
    myFunction3 = saveTheWorld;
})();
