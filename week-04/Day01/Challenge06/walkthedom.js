((d) => {
    
    const walkTheDom = (values) => {
        let arr = Array.from(values.children);
        
        return arr.reduce((result, value) => {
            return result.concat(Array.isArray(value) ? walkTheDom(value) : value);
        }, []);
        
    };    

})(document);