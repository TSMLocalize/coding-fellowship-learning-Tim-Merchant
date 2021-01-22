let daysSince = date => {
    let now = new Date();
    let then = new Date(date);
    let timeGap = Math.abs(now - then);
    let dayGap = Math.floor(timeGap / (1000 * 60 * 60 * 24)); 
    return dayGap;
};

console.log(
    daysSince("1984-04-16"), // 13 thousand and something
    // why not try *your* date of birth?
);