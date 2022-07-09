const person  = {
    name:"arnab",
    occupation:"vollyball",
    study:"functionup",
    arr:[1,2,3,4],
     find :function(){
       return(this.name + " " + this.occupation)
    },
    add:function(){
        
        return this.arr
    }
   
};

 let add1 = person.find()

console.log(add1)

let add2 = person.add()
console.log(add2)
