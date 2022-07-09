
let employee = [
    {name:"arnab",occupation:"software developer"},
    {name:"varun",occupation:"tester"}
]
//console.log(employee)

function company(employer){
    return new Promise (function(resolve,reject){
        setTimeout(() => {
            employee.push(employer)
            console.log("employer are present")
            let error = false;
            if(!error){
                resolve()
            }else{
                reject()
            }
        }, 1000);
    })
}

function people(){
    setTimeout(() => {
        console.log("the employee working at the company")
        let str = ""
        employee.forEach(function(employer){

            str = str + `${employer.name}`
            console.log(str)
        })
        console.log("peolple working in the company")
    }, 5000);
}

let newEmployee = {name:"rahul",occupation:"fullstack"}
company(newEmployee).then(function(){
    people()
}).catch(function(){
    console.log("no one else present in the company")
})