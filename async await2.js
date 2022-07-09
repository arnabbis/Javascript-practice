
let rollno = [1,2,3,4,5];

let totalData = {name:"arnab",occupation:"sde"}

 async function arnab(coworker){
     setTimeout(() => { 
         console.log(rollno,`${totalData.name}`,coworker)
        }, 5000);
        let data = await rollno
        console.log(data)
        let data1 = await totalData
        console.log(data1)
        return coworker
}

let b = arnab("vijay").then((coworker)=>{
    console.log(coworker)
})