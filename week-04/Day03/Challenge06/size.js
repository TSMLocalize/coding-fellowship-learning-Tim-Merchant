((d) => {
    
    let widthSpan = document.getElementById('width');
    let heightSpan = document.getElementById('height');    
    
    let updateDimensions = () => {
        widthSpan.innerText = `${window.innerWidth}`;
        heightSpan.innerText = `${window.innerHeight}`;
    };

    // Initial invocation for site load
    updateDimensions();

    window.addEventListener('resize', updateDimensions)

})(document)