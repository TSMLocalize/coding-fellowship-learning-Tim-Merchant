((d) => {

    let currentTime = d.getElementById('time');    
    
    let updateTime = () => {
        let currentDate = new Date();
        let hours = currentDate.getHours();
        let minutes = currentDate.getMinutes();
        let seconds = currentDate.getSeconds();
        currentTime.innerText = `${hours}:${minutes}:${seconds}`;                
        // Can just use toLocaleTimeString();
    }        

    window.setInterval(updateTime, 10);        

})(document)