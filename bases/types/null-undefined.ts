(() => {
    const anything: undefined = undefined;
    const anything2: void = undefined;
    const anything3: null = null;

    console.log({anything, anything2, anything3});

    //* strictNullChecks: false -> will work
    //* let isActive: boolean = null;

    let isActive: (boolean|undefined);
    console.log(isActive);

    //* strictNullChecks: false -> will work
    //* let vacio: null = undefined; 
    //* console.log(vacio);
})();