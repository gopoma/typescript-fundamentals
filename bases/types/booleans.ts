(() => {
    const isAuthenticated:boolean = true;
    const isGranted:boolean = false;
    let isAdmin:boolean;

    // If we comment the next line, we got an error because isAdmin is not being assigned
    isAdmin = isAuthenticated && isGranted;
    console.log({isAdmin});
})();