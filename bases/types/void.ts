(() => {
    function callback(): void {
        //! return true;
        return;
    }

    function callback2(): void {
        return undefined;
    }

    const callback3 = (): void => {
        console.log("callback3");
        return;
    };

    const foo = callback();
    console.log(foo);

    let foo2: void = undefined;
    let foo3: undefined = undefined;
})();