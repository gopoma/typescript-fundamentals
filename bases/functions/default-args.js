"use strict";
(() => {
    const generateFullname = (firstName, lastName, upper = false) => {
        const fullname = `${firstName} ${lastName || "____"}`;
        return (upper) ? fullname.toUpperCase() : fullname;
    };
    const fullname = generateFullname("Gustavo", "Ordoño", true);
    console.log({ fullname });
})();
