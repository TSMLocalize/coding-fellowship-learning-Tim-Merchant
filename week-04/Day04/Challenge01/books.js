((d) => {

    let bookList = d.getElementById('list');
    let main = d.getElementsByTagName('main')[0];
    let result = d.createElement('p');

    result.classList.add('well');

    let handleListItem = (listItem) => {
        result.textContent = listItem.dataset.author;   
        main.append(result);
    }

    bookList.addEventListener('click', (e) => {
        if (e.target.matches('li')) {
            handleListItem(e.target);
        }
    })

})(document)