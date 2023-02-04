(() => {
    let avenger: any = 123;
    let exists;
    let power;

    avenger = "Dr. Strange";
    // console.log(avenger.charAt(0));
    // Casting
    console.log((avenger as string).charAt(0));

    avenger = 3.1416;
    console.log((<number>avenger).toFixed(3));

    console.log(exists);
    console.log(power);
})();