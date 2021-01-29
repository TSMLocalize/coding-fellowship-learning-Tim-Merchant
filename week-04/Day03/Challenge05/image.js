((d) => {

    const reset = d.getElementById('reset');
    const image = d.getElementById('image');

    const initialHeight = image.clientHeight;
    const initialWidth = image.clientWidth;

    let dblImage = () => {
        image.style.height = image.clientHeight * 2 + "px";
        image.style.width = image.clientWidth * 2 + "px";
    }

    let resetImage = () => {
        image.style.height = initialHeight + "px";
        image.style.width = initialWidth + "px";
    }

    image.addEventListener('click', dblImage);
    reset.addEventListener('click', resetImage);

})(document)