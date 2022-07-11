// ARRAY DESTRUCTUREING:

// (1) let number = [1,2,3,4,5,6]

// let [a,b,c,d,...e] = number

// console.log(a,b,c,d,e)


// (2) let a,b;

// [a,b] = [1,2]

// console.log(a,b)


// (3) let m = 2;

//  let n = 3;

// [m,n] = [n,m]

// console.log(2,3)


// OBJECT DESTRUCTUREING:


// (1) ({a,b,c,d} = {a:1,b:2,c:3,d:4})
// console.log(a,b,c,d)



// (2) let mine = {
//     name:"Arnab",
//     company:"Ola",
//     Date:"26/06/2022",
//     comment:function(){
//         console.log("Will work hard in the company to do good over here")
//     },
// }

// let {name,company,Date,comment} = mine

// console.log(name,company,Date,comment)
// comment()



// (3) let food = {
//     name:"rosogolla",
//     madeOf:"cottage chesse",
//     type:"sweet",
//     foundAt:"kolkata",
//     peopleFondof:{
//         westBengal:10,
//         uttarPradesh:9,
//         maharastra:6,
//     },
// };

// const name = food.name;
// const madeOf = food.madeOf
// const rating = food.peopleFondof.westBengal
// console.log(name,madeOf,rating)

// const {name,peopleFondof:{westBengal},type} = food
// console.log(name,westBengal,type)


// function getAcess(food){
//     console.log(`this is ${food.name} and found at ${food.foundAt}`)
// }

// getAcess(food)



// ARRAY AND OBJECT:


// (1) let laptop = [
//     {item:"hp",price:34000,warenty:2},
//     {item:"dell",price:84000,warenty:4},
//     {item:"apple",price:134000,warenty:4.5},
//     {item:"msi",price:96000,warenty:3},
// ];

// const [,{price},...rest] = laptop
// console.log(price)



// (2) let place = {
//     name:"westBengal",
//     location:["durgapur","asansol","purulia"],
// };

// let {location:[,,loc]} = place;

// console.log(loc)


