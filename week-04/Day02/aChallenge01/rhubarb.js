((d) => {

    let main = document.getElementById('rhubarbs');

    let frag = document.createDocumentFragment();
    
    for (let i = 0; i < 100; i++) {
        let para = document.createElement('p');
        para.textContent = "Rhubarb";
        frag.append(para);
    }

    main.append(frag);

})(document)