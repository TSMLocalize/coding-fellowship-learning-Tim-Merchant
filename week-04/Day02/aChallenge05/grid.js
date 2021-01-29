// Using grid.html. With JavaScript, create a 64×64 grid of <span> elements, each one 10px square. The top left corner should have background rgb(0,0,127) and the bottom right should have background rgb(255,255,127). The r value should go up by 4 with each column and the g value should go up by 4 with each row. The b value should be fixed at 127.

((d) => {

    let grid = d.getElementById('grid');
    let frag = d.createDocumentFragment();

    // Create grid
    grid.style.display = "flex";
    grid.style.flexFlow = "wrap row";
    grid.style.width = "640px";
    grid.style.height = "640px";    
    let red = 0;
    let green = 0;
    
    for (let i = 0; i < 64; i++) {
        red += 4;                
        for (let y = 0; y < 64; y++) {
            green += 4            
            let tile = d.createElement('span');            
            tile.style.width = "10px";
            tile.style.height = "10px";
            tile.style.backgroundColor = `rgb(${red}, ${green}, 127)`;
            frag.append(tile);
            if(y === 63) {
                green = 0;            
            }
        }
    }

    grid.append(frag);

})(document)