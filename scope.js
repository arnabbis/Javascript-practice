// global scope = var 
// var tayla = "30"; // fish global // hilsa,katla = specific variety of fish haa
// console.log(tayla)
// {
//     var tayla = "20";
//     console.log(tayla) // changing of value in the variable is known as shadowing .
// }
// console.log(tayla)

// functional scope = using of let const and var at function 

// function arnab(c,d,e){
//     let a = 30;
//     console.log(e)
//     c=30;
//     console.log(a,c) // 30,30 
//      var b = 20 
//     console.log(b,d,e)
//    // return rakesh  // 20,78
// }
// arnab(45,78,function rakesh(){
//     console.log("ruby di")},arnab()())
// //console.log(store())

// block scope := ek block scope block scope ma let and const 

let a = 100
{                       
    let a = true
    {
        const b = 20
        console.log(v,b)  // undefined,20
        {
            var v = 30
            {
                let f = 40
                console.log(f) // 40 , not iini
            }
            var v = 55
            console.log(v)  // 55
        }
        console.log(b) // 20
    }
    console.log(a)  // true
}
console.log(a)   // 100
let h = 20;

