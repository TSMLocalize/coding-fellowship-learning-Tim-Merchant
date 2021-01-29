((d) => {

    const items = [...d.getElementById('items').children];

    let width = 4;
    let height = 4;    
    let y = 1;
    let x = 1;

    for (let i = 0; i < items.length; i++) {
                        
        items[i].classList.add(`col-${y}`);
        items[i].classList.add(`row-${x}`);                

        if(x === width){
            x = 1;
            y += 1;
        }                
        else if(x !== width){
            x += 1;
        }        
    }

})(document);
