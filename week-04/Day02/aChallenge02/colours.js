((d) => {

    let items = Array.from(d.getElementById('items').children); 
    let colors = document.getElementById('colours');   
    
    let frag = document.createDocumentFragment();
    
    items.forEach(item => {
        let listItem = document.createElement('li');
        listItem.innerText = item.getAttribute('style').replace('background-color:', '').replace(';', '');              
    
        frag.append(listItem);
    })    

    colors.append(frag);

})(document)