((d) => {

    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    for (let i = 0; i < 256; i++) {        
        for (let j = 0; j < 256; j++) {            
            ctx.fillStyle = `rgb(${i},${j},127)`;
            ctx.fillRect(j, i, 1, 1);
        }
    }


})(document)