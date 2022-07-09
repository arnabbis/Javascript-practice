

function rakesh(b){ // father and mother
    let a = 100;
   // console.log(v)
    function ruby(v){ 
        console.log(v)// child
        let sum = a+b
        let xyz = sum
        console.log(xyz)  // closure means the function with its lexical environment 
        console.log(sum)
        function arnab(){ 
           // child
            let sub = a-b
            console.log(sub)
            let z = sum*sub
            return z  
        }
         return arnab
    }
    return ruby
}
let store = rakesh(45)(50)
//let store1 = ruby()
console.log(store(56))