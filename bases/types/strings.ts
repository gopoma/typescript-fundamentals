(() => {
    const name: string = 'Gus\'tavo';
    const name2: string = "Edúardo's";
    const name3: string = `Engin'eer": ${name}`;

    const username: string = "Cartman";
    console.log(`I'm ${username}`);
    console.log(username.toUpperCase());

    console.log(username[100]?.toUpperCase());
})();