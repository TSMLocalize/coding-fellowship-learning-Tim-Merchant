class Lightswitch {
    constructor(state){        
        this.state = false
    }
    isOn(){
        return this.state;
    }
    turnOn(){
        this.state = true;
    }
    turnOff(){
        this.state = false;
    }    
}

let lightswitch = new Lightswitch();

// you can check whether it is on or not
console.log(lightswitch.isOn()); // false

// you can turn it on
lightswitch.turnOn();
console.log(lightswitch.isOn()); // true

// you can turn it off
lightswitch.turnOff();
console.log(lightswitch.isOn()); // false