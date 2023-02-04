"use strict";
(() => {
    function callback() {
        //! return true;
        return;
    }
    function callback2() {
        return undefined;
    }
    const callback3 = () => {
        console.log("callback3");
        return;
    };
    const foo = callback();
    console.log(foo);
    let foo2 = undefined;
    let foo3 = undefined;
})();
