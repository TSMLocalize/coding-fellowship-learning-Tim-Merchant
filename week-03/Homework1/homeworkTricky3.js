let report = '';

for (let i = 1; i <= 15; i++) {
    for (let y = 1; y <= 15; y++) {
        report += `${y * i}\t`;
    }    
    console.log(report);        
    report = '';
}