((d) => {

    const paragraphs = [...d.getElementById('main').children];

    paragraphs.filter(x => x.textContent.search("secret moon base") !== -1)
    .forEach(x => x.classList.add('redacted'));
        
})(document);