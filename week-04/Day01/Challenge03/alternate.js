((d) => {

        const table = d.getElementById('table');

        const tableRows = [...table.getElementsByTagName('tr')];
        
        tableRows.forEach((y, i) => {
            if (i % 2 === 0) {                
                y.classList.add('alternate')
            }
        });        

})(document);