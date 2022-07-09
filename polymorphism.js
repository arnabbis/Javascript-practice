
class player{
    constructor(name){
        this.myName = name;
    }
    play(){
        return `my name is ${this.myName} `
    }
}

class cricket extends player{
    constructor(name,cricketers){
        super(name);
        this.myCricketers = cricketers;
    }
    play(){
        return  `${super.play()} , he is the ${this.myCricketers}`
    }
}

let obj = new cricket("arnab","sachin");
console.log(obj.play())