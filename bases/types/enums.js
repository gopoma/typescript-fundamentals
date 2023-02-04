"use strict";
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium"] = 2] = "medium";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    ;
    let currentAudioLevel = AudioLevel.medium;
    console.log({ currentAudioLevel });
    console.log({ AudioLevel });
    let Foo;
    (function (Foo) {
        Foo[Foo["a"] = 0] = "a";
        Foo[Foo["b"] = 10] = "b";
        Foo[Foo["c"] = 11] = "c";
        Foo[Foo["d"] = 9] = "d";
        Foo[Foo["e"] = 10] = "e";
    })(Foo || (Foo = {}));
    ;
    const tmp = Foo.e;
    console.log(tmp); // 10
})();
