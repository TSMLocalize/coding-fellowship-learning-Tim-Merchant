let address = {    
    street: '1 Made Up Street',
    town: 'Bristol',
    postcode: 'BS4 8TR',
    fullAddress() {
        return `
        ${this.street}, ${this.town}, ${this.postcode}`;
    },

}

console.log(address.postcode); // BS4 8TR
console.log(address.town); // Bristol
console.log(address.fullAddress()); // "1 Made Up Street, Bristol, BS4 8TR"

// check it works if the variable gets renamed
let renamed = address;
address = 10;
console.log(renamed.fullAddress()); // "1 Made Up Street, Bristol, BS4 8TR"