// promises  resolve , reject 
function sum(){
    let a = 10
    let b = a
    let sum = a+b
    return sum
}
sum(2,3)

let aws = new Promise (function(resolve,reject){
    let error = false;
    if(!error){
        resolve("i am arnab")
    }else{
        reject("your name is incorrect")
    }
})
aws.then(function(){
    console.log("promise is resolved")
}).catch(function(){
    console.log("promise rejected")
})