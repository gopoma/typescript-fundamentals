(() => {
    const generateFullname = (firstName: string, lastName?: string, upper: boolean = false): string => {
        const fullname = `${firstName} ${lastName || "____"}`;
        return (upper) ? fullname.toUpperCase() : fullname;
    };

    const fullname = generateFullname("Gustavo", "Ordoño", true);
    console.log({fullname});
})()