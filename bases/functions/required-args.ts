(() => {
    const getFullname = (firstName: string, lastName: string): string => {
        return `${firstName} ${lastName}`;
    };

    const displayName = getFullname("Gustavo", "Ordoño");
    console.log({displayName});
})()