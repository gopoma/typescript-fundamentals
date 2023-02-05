(() => {
    const generateFullname = (firstName: string, ...restArgs: string[]): string => {
        return `${firstName} ${restArgs.join(" ")}`;
    };

    const displayName = generateFullname("Gustavo", "Eduardo", "Ordoño", "Poma");
    console.log({displayName});
})()