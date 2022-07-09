
let plyers = [
    { name: "ABD", runs: 1000 },
    { name: "Kohli", runs: 750 }
]

function a(newPlyr,callBack) {
    setTimeout(() => {
        plyers.push(newPlyr)
        console.log("plyers to be added " + `${newPlyr.name}`)
       callBack()
    }, 5000);
}

function b() {
    setTimeout(() => {
        let str =""
        plyers.forEach(element => {
           // console.log("all players" + `${element.name}`)
            str = str +`${element.name}`
            console.log(str)
        });
    }, 2000);
}
let newPlyrs = { name: "Dhoni", runs: 800 }
a(newPlyrs,b)