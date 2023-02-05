"use strict";
(() => {
    const generateEmail = (username, group) => {
        return `${username}@${group || "default"}.edu.pe`;
    };
    const email = generateEmail("gopoma");
    console.log({ email });
})();
