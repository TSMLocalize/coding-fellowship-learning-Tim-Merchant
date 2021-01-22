
let flatten = values => {
    return values.reduce((result, value) => {
        return result.concat(Array.isArray(value) ? flatten(value) : [value]);
    }, []);
};

console.log(
    // ["a", "b", "c", "d", "e", "f", "g", "h"]
    flatten(["a", "b", ["c", "d"], [["e", "f"], ["g", "h"]]]),
);