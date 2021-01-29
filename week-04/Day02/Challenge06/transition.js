((d) => {


    let body = d.getElementsByTagName('body')[0];

    let last = 0;

    let red = 0;
    let green = 0;
    let blue = 0;

    let loop = time => {
        let dt = time - last;
        last = time;
        console.log("Total time:", time, "Time since last loop", dt);

        let red = getRndInteger(0, 255);
        let green = getRndInteger(0, 255);
        let blue = getRndInteger(0, 255);

        body.style.transition = 'background-color 0.5s ease';
        body.style.backgroundColor = `rgb(
            ${red}, ${green}, ${blue})`;

        requestAnimationFrame(loop);
    };


    loop(0);

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

})(document)