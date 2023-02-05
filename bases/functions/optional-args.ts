(() => {
    const generateEmail = (username: string, group?: string): string => {
        return `${username}@${group || "default"}.edu.pe`;
    };

    const email = generateEmail("gopoma");
    console.log({email});
})()