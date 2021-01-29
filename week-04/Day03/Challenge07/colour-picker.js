((d) => {

    const picker = document.getElementById('picker');
    const red = document.getElementById('red');
    const green = document.getElementById('green');
    const blue = document.getElementById('blue');

    let updateColor = () => {
        picker.style.backgroundColor = `rgb(${red.value}, ${green.value}, ${blue.value})`;
    }

    //Initial invocation for site load
    updateColor();

    red.addEventListener('input', updateColor);
    green.addEventListener('input', updateColor);
    blue.addEventListener('input', updateColor);

})();