((d) => {

    let input = d.getElementById('input');
    let output = d.getElementById('output');
    let add = d.getElementById('Add');

    let total = 0;    

    add.addEventListener('click', () => {
        total += Number(input.value);        
        output.value = total;
    })

})(document)