
let car = {
    name:"arnab",
    topSpeed:56,
    run:function(){
        console.log("running car");
    }
}

function carModel(givenName,givenSpeed){
    this.name = givenName;
    this.topSpeed = givenSpeed;
    this.run = function(){
        console.log(`${this.name} is a running car`)
    }
    this.compare = function(){
        console.log(`this car is better in speed by ${car1.topSpeed-this.topSpeed}`)
    }
}
car1 = new carModel("rakesh",179)
car2 = new carModel("ruby",93)
car3 = new carModel("rushi",170)
console.log(car1,car2,car3)
console.log(car2.compare())