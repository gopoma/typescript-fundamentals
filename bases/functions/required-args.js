"use strict";
(() => {
    const getFullname = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const displayName = getFullname("Gustavo", "Ordoño");
    console.log({ displayName });
})();
