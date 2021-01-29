((d) => {

    let add = document.getElementById('add');
    let subtract = document.getElementById('subtract');
    let multiply = document.getElementById('multiply');
    let divide = document.getElementById('divide');

    let value1 = document.getElementById('value1');
    let value2 = document.getElementById('value2');
    let answer = document.getElementById('answer');

    let mathsAdd = () => answer.textContent =
        Number(value1.value) + Number(value2.value);
    let mathsSubtract = () => answer.textContent = value1.value - value2.value;
    let mathsMultiply = () => answer.textContent = value1.value * value2.value;
    let mathsDivide = () => answer.textContent = value1.value / value2.value;

    add.addEventListener('click', mathsAdd);
    subtract.addEventListener('click', mathsSubtract);
    multiply.addEventListener('click', mathsMultiply);
    divide.addEventListener('click', mathsDivide);


})(document)