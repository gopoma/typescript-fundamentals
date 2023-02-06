(() => {
    type Hero = {
        name: string,
        age?: number,
        powers: number[],
        getName?: () => string
    };

    let myCustomVariable: (string | number | Hero) = "Gustavo";
    console.log(typeof myCustomVariable);

    myCustomVariable = 25;
    console.log(typeof myCustomVariable);

    myCustomVariable = {
        name: "Patricio Estrella",
        age: 75,
        powers: [1, 2, 3],
    };
    console.log(typeof myCustomVariable);
    console.log(myCustomVariable);
})()