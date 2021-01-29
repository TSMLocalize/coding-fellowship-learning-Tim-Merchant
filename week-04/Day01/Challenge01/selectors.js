// Add a class container to the <body> tag
// Add a class col-md-12 to the header
// Add a class col-md-4 to the sidebar
// Add a class col-md-8 to the main block
// Add a class lead to the first paragraph of the main block
// Add a class list-group to the first list in the main block
// Add a class pagination to the second list in the main block

((d) => {
    const body = d.getElementsByTagName('body');
    body.classList.add('container');

    const header = d.getElementById('header');
    header.classList.add('col-md-12');

    const sideBar = d.getElementById('sidebar');
    sideBar.classList.add('col-md-4');

    const main = d.getElementById('main');
    main.classList.add('col-md-8');

    const firstPara = d.getElementById('main').firstChild;
    firstPara.classList.add('lead');

    const firstList = d.getElementsByClassName('js__first-list')[0];
    firstList.classList.add('list-group');    

    const secondList = d.getElementsByClassName('.js__second-list')[0];
    secondList.classList.add('pagination');

    Array.from(firstList.children).forEach(x => x.classList.add('list-group-item'));
        

})(document);