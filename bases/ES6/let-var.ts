(() => {
    //* Possible in JavaScript
    //* console.log(name);

    var name: string = "Gustavo";

    function getName(): void {
        console.log("Viejo getName");
    }

    //* Unexpected assignation
    //* getName = () => { console.log("Nuevo getName") }
    //* getName();
})()