
let oldest = obj => {
    let objectKeys = Object.keys(obj);
    return objectKeys.reduce((x, y) => obj[x] > obj[y] ? x : y, 0);
}

(() => {
    // a map object
    // name as the key
    // ages as the value
    let folks = {
        Aretha: 29,
        Bob: 45,
        Chetna: 67,
        Diego: 32,
    };

    console.log(oldest(folks)); // "Chetna"
})()