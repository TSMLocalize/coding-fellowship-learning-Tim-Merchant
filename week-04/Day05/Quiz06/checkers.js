((d) => {

    let checkers = [...d.getElementById('checkers').children];


    checkers.forEach((tile, index) => {

        const col = (index % 8) + 1;
        const row = Math.floor(index / 8) + 1;

        if (row % 2 === 0 && col % 2 !== 0) {
            tile.style.backgroundColor = "black";
        }
        if (row % 2 !== 0 && col % 2 === 0) {
            tile.style.backgroundColor = "black";
        }

    })

})(document)