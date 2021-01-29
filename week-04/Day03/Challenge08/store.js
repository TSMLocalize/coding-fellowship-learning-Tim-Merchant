((d) => {

    const input = document.getElementById('input');
    const store = document.getElementById('store');
    const display = document.getElementById('display');
    const list = document.getElementById('list');

    let storageArray = [];

    store.addEventListener('click', () => {
        storageArray.push(input.value);
        input.value = "";
    });

    display.addEventListener('click', () => {
        list.textContent = "";        
        storageArray.sort();        
        storageArray.forEach(item => {
            let listItem = document.createElement('li');
            listItem.textContent = item;
            listItem.classList.add('list-group-item');
            list.append(listItem);
        })
    });


})(document)