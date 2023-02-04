"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
(() => {
    const throwError = true;
    const url = (throwError) ? "gopoma" : "https://jsonplaceholder.typicode.com/posts";
    const getPosts = () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield fetch(url);
        if (!response.ok) {
            throw new Error("No se pudo realizar la petición de los posts");
        }
        const posts = yield response.json();
        return posts;
    });
    //* console.log(getPosts());
    const foo = () => {
        throw new Error("doesn't work");
    };
    foo();
})();
