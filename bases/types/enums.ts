(() => {
    enum AudioLevel {
        min = 1,
        medium,
        max = 10,
    };

    let currentAudioLevel = AudioLevel.medium;
    
    console.log({currentAudioLevel});
    console.log({AudioLevel});

    enum Foo {
        a,
        b = 10,
        c,
        d = 9,
        e
    };
    const tmp: Foo = Foo.e;
    console.log(tmp); // 10
})();