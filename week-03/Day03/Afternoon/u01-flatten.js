let flatten = values => {
    return values.reduce((output, value) => {
        // if the value is an array, run flatten on it again and merge with output
        // if its not concat it into output
        // could use push to avoid adding value into a new array
        // but couldn't fit on one line as push doesn't return a useful value
        return output.concat(Array.isArray(value) ? flatten(value) : [value]);
    }, []);
};

console.log(
    // ["a", "b", "c", "d", "e", "f", "g", "h"]
    flatten(["a", "b", ["c", "d"], [["e", "f"], ["g", "h"]]]),
);