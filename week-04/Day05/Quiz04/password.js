((d) => {

    let input = d.getElementById('input');
    let output = d.getElementById('output');

    let outputData = {};

    outputData.sub10 = {
        color: 'red',
        message: 'Your password has less than 10 characters!',
    };
    outputData.sub18 = {
        color: 'orange',
        message: 'Your password needs to be above 18 characters!'
    };
    outputData.default = {
        color: 'green',
        message: 'Your password has enough characters!'
    };

    handleInput = (inputLength) => {

        if (inputLength < 10) {
            input.style.backgroundColor = outputData.sub10.color;
            output.value = outputData.sub10.message;
        }
        else if (inputLength < 18) {
            input.style.backgroundColor = outputData.sub18.color;
            output.value = outputData.sub18.message;
        }
        else {
            input.style.backgroundColor = outputData.default.color;
            output.value = outputData.default.message;
        }
    }

    input.addEventListener('input', (e) => {
        handleInput(e.target.value.length);
    })

})(document)