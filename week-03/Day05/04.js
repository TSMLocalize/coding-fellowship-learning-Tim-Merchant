let x  = 12;

let add = () => {
    // this x is undeclared, so it's the same as the above x
    x += 12;
    return x;
};

add(x);

console.log(x);
// 24
