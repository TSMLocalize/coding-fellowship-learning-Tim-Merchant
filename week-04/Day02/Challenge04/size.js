((d) => {
    
    let widthSpan = document.getElementById('width');
    let heightSpan = document.getElementById('height');

    let width = window.innerWidth;
    let height = window.innerHeight;

    widthSpan.innerText = `${width}`;
    heightSpan.innerText = `${height}`;

})(document)