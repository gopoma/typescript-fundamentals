"use strict";
(() => {
    const isAuthenticated = true;
    const isGranted = false;
    let isAdmin;
    // If we comment the next line, we got an error because isAdmin is not being assigned
    isAdmin = isAuthenticated && isGranted;
    console.log({ isAdmin });
})();
