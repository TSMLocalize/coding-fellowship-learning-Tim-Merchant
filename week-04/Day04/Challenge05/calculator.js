((d) => {

    const buttons = d.getElementById('buttons');
    const value1 = d.getElementById('value1');
    const value2 = d.getElementById('value2');
    const answer = d.getElementById('answer');

    main.addEventListener('click', (e) => {

        if (e.target.matches('#add')) {
            answer.textContent = +value1.value + +value2.value;
        }
        if (e.target.matches('#subtract')) {
            answer.textContent = value1.value - value2.value;
        }
        if (e.target.matches('#multiply')) {
            answer.textContent = value1.value * value2.value;
        }
        if (e.target.matches('#divide')) {
            answer.textContent = value1.value / value2.value;
        }
    })

})(document)