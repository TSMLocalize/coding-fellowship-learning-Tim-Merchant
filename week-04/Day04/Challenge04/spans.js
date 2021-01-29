((d) => {

    let main = d.getElementById('pixels');

    let spans = [];

    let handleSpan = (tile) => {

        if (spans.includes(tile)) {
            // let existingIndex = spans.indexOf(tile);
            // tile.style.background = '';
            // spans.splice(existingIndex, 1);
            spans = spans.filter(span => span !== tile);
        } else {
            tile.style.background = 'green';
            spans.push(tile);
        }
    };

    main.addEventListener('click', (e) => {
        if (e.target.matches('span')) {
            handleSpan(e.target);
        }
    })

})(document)