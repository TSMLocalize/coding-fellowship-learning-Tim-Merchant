((d) => {

    const items = d.getElementById('items');
    const tBody = d.getElementsByTagName('tbody')[0];    
    const total = d.getElementById('total');

    let basket = {};
    total.value = 0;

    let formatPrice = (price) => `£${price.toFixed(2)}`;

    let updateBasket = (itemData) => {

        // Get data from buttons
        let dataName = itemData.dataset.name;
        let dataPrice = Number(itemData.dataset.price);
        total.value += Number(dataPrice);

        // Add new item to the basket object
        if (!basket[dataName]) {

            basket[dataName] = {};
            basket[dataName].price = dataPrice;
            basket[dataName].quantity = 1;

        }
        // Else update price and quantity of existing item
        else {
            
            let updatedPrice = Number(basket[dataName].price) + dataPrice;
            let updatedQuantity = Number(basket[dataName].quantity) + 1;
            
            basket[dataName] = {
                price: updatedPrice,
                quantity: updatedQuantity,
            }
        }                

        // reset table
        tBody.textContent = "";

        // create new table with updated info
        Object.keys(basket).forEach(key => {
            
            let itemTR = d.createElement('tr');
            let nameTD = d.createElement('td');
            let quantityTD = d.createElement('td');
            let priceTD = d.createElement('td');                    

            nameTD.textContent = key;
            quantityTD.textContent = basket[key].quantity;
            priceTD.textContent = formatPrice(basket[key].price);
        
            itemTR.append(nameTD, quantityTD, priceTD);
            tBody.append(itemTR);
        })

        total.textContent = formatPrice(total.value);
    }

    // If a button is clicked, then update the basket.
    items.addEventListener('click', (e) => {
        if (e.target.matches('button')) {
            updateBasket(e.target);
        }
    })

})(document)

