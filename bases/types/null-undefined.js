"use strict";
(() => {
    const anything = undefined;
    const anything2 = undefined;
    const anything3 = null;
    console.log({ anything, anything2, anything3 });
    //* strictNullChecks: false -> will work
    //* let isActive: boolean = null;
    let isActive;
    console.log(isActive);
    //* strictNullChecks: false -> will work
    //* let vacio: null = undefined; 
    //* console.log(vacio);
})();
