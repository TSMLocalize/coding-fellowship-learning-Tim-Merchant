class Address {
    constructor(street, postcode, town) {
        this.street = street;
        this.postcode = postcode;
        this.town = town;
    }
    fullAddress() {
        return `${this.street}, ${this.postcode}, ${this.town}`;
    }
}

let address = new Address("1 Made Up Street", "BS4 8TR", "Bristol");

console.log(
    address.postcode, // BS4 8TR
    address.town, // Bristol
    address.fullAddress(), // "1 Made Up Street, Bristol, BS4 8TR"
);