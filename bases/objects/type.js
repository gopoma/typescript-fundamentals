"use strict";
(() => {
    var _a;
    let flash = {
        name: "Barry Allen",
        age: 25,
        powers: ["Super velocidad", "Viajar en el tiempo"]
    };
    let anthony = {
        name: "Anthony",
        age: 28,
        powers: ["Super velocidad"],
        getName() {
            return this.name;
        }
    };
    console.log((_a = anthony.getName) === null || _a === void 0 ? void 0 : _a.call(anthony));
})();
