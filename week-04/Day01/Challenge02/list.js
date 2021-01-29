((d) => {

    const listItems = [...d.getElementById('list').children];

    listItems.forEach(x => x.classList.add('list-group-item'));

})(document);