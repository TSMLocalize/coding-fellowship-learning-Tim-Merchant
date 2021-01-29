((d) => {

    let body = document.getElementsByTagName('body')[0];

    let startPosition = window.pageYOffset;
    let hue = 0;
    let height = body.clientHeight - window.innerHeight;    
    
    //invoke to set an initial colour
    body.style.backgroundColor = `hsl(${hue} 50% 50%)`;
    

    window.addEventListener('scroll', () => {

        let currentPosition = window.pageYOffset;

        let hue = Math.floor((currentPosition / height) * 360);        

        body.style.backgroundColor = `hsl(${hue} 50% 50%)`;

    });

})(document)