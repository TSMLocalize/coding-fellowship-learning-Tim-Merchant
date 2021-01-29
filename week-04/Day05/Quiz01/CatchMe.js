((d) => {

    let button = d.getElementById('button');

    let top = 40;

    button.style.position = `relative`;

    button.addEventListener('click', (e) => {
        button.style.transform = `translateY(${top}px)`;
        top += 40;
    })

})(document)