((d) => {

    const main = d.getElementById('main');

    const addButton = () => {
        let newButton = d.createElement('button');
        newButton.classList.add('btn', 'btn-primary');
        newButton.textContent = "Click me!";
        main.append(newButton);
    }

    main.addEventListener('click', (e) => {

        if (e.target.matches('button')) {
            addButton();
        }

    });

})(document)