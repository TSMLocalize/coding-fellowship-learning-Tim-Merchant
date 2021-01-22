let titleCase = x => {
    let result = x.split(" ").map(x => {
        let result = Array.from(x).forEach(element => {
            return element[0].toUpperCase();
        });        
        return result;
    });
    console.log(result);
}

console.log(
    titleCase("hello, my name is Jim"), // "Hello, My Name Is Jim"
);