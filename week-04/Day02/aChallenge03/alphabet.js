((d) => {

    let list = document.getElementById('alphabet');
    let frag = document.createDocumentFragment();
    let uList = document.createElement('ul');

    for (let i = 65; i < 89; i++) {
        
        let listItem = document.createElement('li');
        listItem.innerText = String.fromCharCode(i);
        uList.append(listItem);    
    }
    
    frag.append(uList);        

    list.append(frag);

})(document)