
function fruits(name,area,cost){
    this.myName = name;
    this.myArea = area;
    this.myCost = cost;

    let vat = 100;

    let calculateTotal = function(){
        let totalPrice = cost+vat
        console.log(totalPrice)
    }
    
    this.getDetails = function(){
        console.log(`i like this friut its name is ${this.myName} , it is found at ${this.myArea}`)
        calculateTotal()
    }
}

let res = new fruits("mango","wb",900);
res.getDetails()
// res.vat = 2000
// res.calculateTotal()