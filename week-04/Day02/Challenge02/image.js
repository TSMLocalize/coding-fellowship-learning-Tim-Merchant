((d) => {

    let image = d.getElementById('image');
        
    let height = image.offsetHeight * 2;
    let width = image.offsetWidth * 2;
    
    image.style.height = height + "px";
    image.style.width = width + "px";
    // use CLIENTHEIGHT here, else it'll be affected by other CSS and not accurate

})(document)