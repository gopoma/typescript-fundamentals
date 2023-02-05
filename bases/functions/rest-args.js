"use strict";
(() => {
    const generateFullname = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(" ")}`;
    };
    const displayName = generateFullname("Gustavo", "Eduardo", "Ordoño", "Poma");
    console.log({ displayName });
})();
