((d) => {

    const getByClass = (className) => {
        let elements = [...document.querySelectorAll('*')];
        return elements.filter(x => x.classList.contains(className));
    };

    const walkTheDom = (arr) => {
        return arr.reduce((result, value) => {
            return result.concat(Array.isArray(value) ? walkTheDom(value) : value);
        }, []);
    };

    console.log(getByClass("table"));

})(document);