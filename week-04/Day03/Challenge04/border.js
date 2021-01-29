((d) => {

    let square = document.getElementById('border');    

    let isBlue = true;

    // let currentColor = square.style.borderColor;

    square.addEventListener('click', () => {        
        square.style.borderColor = isBlue ?  'red' :  'blue';
        isBlue = !isBlue;
    });


})(document)