
let obj = {
    name:"arnab",
    studing:"functionUp",
    habit:function(){
        console.log("i am very good")
    }
}

console.log(obj)

function Obj(givenName){
    this.name = givenName;
}

Obj.prototype.givenName = function(){
    return this.name
}

Obj.prototype.setName = function(newName){
     this.name = newName;
}

Obj.prototype.getName = function(newName){
    this.name = newName;
}

let obj2 = new Obj("Rakesh")
console.log(obj2)