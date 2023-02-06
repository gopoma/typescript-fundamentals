(() => {
    const throwError: boolean = true;
    const url: string = (throwError) ? "gopoma" : "https://jsonplaceholder.typicode.com/posts";

    const getPosts = async (): (never|Promise<string[]>) => {
        const response = await fetch(url);
        if(!response.ok) {
            throw new Error("No se pudo realizar la petición de los posts");
        }
        const posts = await response.json();
        return posts;
    };
    //* console.log(getPosts());

    const foo = (): never => {
        throw new Error("doesn't work");
    };
    //? foo();
})();