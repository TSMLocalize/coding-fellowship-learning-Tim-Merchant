((d) => {

    let body = d.getElementsByTagName('body')[0];
    let removeButton = d.getElementById('remove');

    let selectedParagraphs = [];

    let handleParagraph = (para) => {
        para.classList.add('selected');
        selectedParagraphs.push(para);
    };

    let removeParagraphs = () => {
        selectedParagraphs.forEach(para => para.remove());
        selectedParagraphs.clear();
    };

    body.addEventListener('click', (e) => {
        
        if (e.target.matches('p')) {
            handleParagraph(e.target);
        }

        if (e.target.matches('#remove')) {
            removeParagraphs();
        }
    })

})(document)