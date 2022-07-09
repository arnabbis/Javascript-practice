//   function x(){

//     for(let i=1;i<=5;i++){
//         setTimeout(function(){           // (1) withy the help of let we can solve the error of var because let is a block scope which create new data every time the loop runs and called in the function where the i stores the new value 
//             console.log(i)
//         },i*3000)
//         console.log("namaste js")
//     }
//     console.log("namaste js by arnab")
// }
// x();



//  function x(){

//         for(var i=1;i<=5;i++){
              
//             function close(x) {
//             setTimeout(function(){            //(1) with the help of close function every time we call the i it stores the new value of i in the x and when the settimeout function is called it gives the value present in the x which is the new value of i;
//                 console.log(x)
//             },i*1000)
//         }
//         close(i)
//          console.log("namaste js")
        
//     }
//         console.log("namaste js by arnab")
//     }
//     x();


// function arnab(){

//     for(let i=0;i<5;i++){
//     setTimeout(function(){
//         console.log("arnab is a student of function up")
//     },i*5000)
//     console.log("my name is arnab")
// }
// }
// arnab()
