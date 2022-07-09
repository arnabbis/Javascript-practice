
// function getFruits(callback){
//     let fruits = ["apple","guava","mango"];
//     setTimeout(() => {
//         callback(fruits)
        
//     }, 2000);
// }
// getFruits(console.log)

// function promisify(){

// }

let  promisify = require("util").promisify;

function arnab(cb){
setTimeout(() => {
    console.log("running heavily")
    cb(null,"success")
}, 2000);
}

let promise = promisify(arnab)

async function main(){
    try{
    let res = await promisify()
    console.log(res)
    }catch(err){
        console.log(err)
    }
    console.log("function finished")
}

main()