((d) => {

    let output = d.getElementById('output');
    let links = d.getElementById('links');

    let handleClick = (clickedLink) => {
        clickedLink.href = "#";
        output.textContent = clickedLink.textContent;
    };

    links.addEventListener('click', (e) => {
        if (e.target.matches('a')) {
            handleClick(e.target);            
        }
    })

})(document)