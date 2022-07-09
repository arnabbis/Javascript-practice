
//"use strict"

let a = "arnab" //  a = suraj b = bhoyar function name(){
                      // console.log(b,a) // 
                      //console.log(a,b)  // 
                    // function name2(){
                        // let myname = "arnab" 
                    //}
                    // name2(console.log(myname))
//}
// name()
outest()("cat")()()
function outest (c){
    var c = 100
function outer(b){
    function innerMost(d){
        var d = 10
    
    //return innerMost
    //var a = 10
    function inner(){
        let a = 20
        let c = 40 
        console.log(a,b,c,d)
    }
     return inner 
}
     return innerMost
}
return outer
}

