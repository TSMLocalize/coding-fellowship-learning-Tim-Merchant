((d) => {

    const button = document.getElementById('button');
    const counter = document.getElementById('counter');

    let value = 0;

    button.addEventListener('click', () => {
        value += 1;
        counter.innerText = value;
    });

})(document);