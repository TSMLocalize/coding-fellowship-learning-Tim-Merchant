((d) => {

    let list = d.getElementById('List');

    let handleMove = (listItem) => {
        listItem.remove();
        list.prepend(listItem);
    };

    list.addEventListener('click', (e) => {
        if (e.target.matches('li')) {
            handleMove(e.target);            
        }
    })

})(document)