let segments = document.getElementsByClassName('segments')[0];

segments.childNodes.forEach(x => {
    x.addEventListener('click', (e) => {

        // Expand choice
        if (x.classList.contains('contract' || 'contractFromExtend')) {
            x.classList.add('extendFromContract');
            removeClasses(x, 'extendFromContract');
        }
        else {
            x.classList.add('extend');
            removeClasses(x, 'extend');
        }

        // Contract Others
        for (let i = 0; i < segments.childNodes.length; i++) {
            
            if (segments.childNodes[i] != x) {
                if (segments.childNodes[i].classList.contains('extend')) {
                    segments.childNodes[i].classList.add('contractFromExtend');
                    removeClasses(segments.childNodes[i], 'contractFromExtend');
                }
                else {
                    segments.childNodes[i].classList.add('contract');
                    removeClasses(segments.childNodes[i], 'contract');
                }
            }
        }
    })
})

function removeClasses(element, current) {

    if (current != 'extend') {
        element.classList.remove('extend');
    }
    if (current != 'contract') {
        element.classList.remove('contract');
    }
    if (current != 'extendFromContract') {
        element.classList.remove('extendFromContract');
    }
    if (current != 'contractFromExtend') {
        element.classList.remove('contractFromExtend');
    }
}