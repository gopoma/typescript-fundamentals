(() => {
    const amountTasks:number = 200;
    let amountCompletedTasks:number = 150;

    if(amountCompletedTasks < amountTasks) {
        console.log(`Hurry up!, you've got ${amountTasks - amountCompletedTasks} remaining tasks to do`);
    } else {
        console.log("Congratulations, You've completed all tasks!");
    }

    const foo = Number("79RST");
    console.log("Be careful!, NaN is also a number", {foo});
})();