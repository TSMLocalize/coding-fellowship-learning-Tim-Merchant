((d) => {

    let items = Array.from(document.getElementById('items').children);    
    let main = document.getElementById('items');

    let width = 5;  
    let height = 5;  

    let setupGrid = () => {
        
        if (window.pageXOffset < 400) {
            width = 2;            
            height = 2;
        }

        items.forEach((elem, index) => {
            
            const col = (index % width);        
            const row = Math.floor(index / height);
            
            elem.style.top = `${col * 200}px`;
            elem.style.left = `${row * 200}px`;
        });
    }    

    window.addEventListener('resize', setupGrid);

})(document)