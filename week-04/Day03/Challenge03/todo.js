((d) => {

    const list = document.getElementById('list');
    const button = document.getElementById('add');
    const input = document.getElementById('todo');

    button.addEventListener('click', () => {
        let listItem = document.createElement('li');
        listItem.classList.add('list-group-item');
        listItem.innerText = input.value;
        list.prepend(listItem);
    });

})(document)