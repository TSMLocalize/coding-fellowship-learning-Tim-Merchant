((d) => {

    const main = document.getElementById('main');
    const button = document.getElementById('button');

    let addParagraph = () => {
        let para = document.createElement('p');
        para.innerText = "Clicked!";
        main.append(para);
    }

    button.addEventListener('click', addParagraph);

})(document)