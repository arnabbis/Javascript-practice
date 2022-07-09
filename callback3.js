let data = [1,2,3,4,5,6]

function a(add,callback){
    setTimeout(() => {
        //for(let i=0;i<data.length;i++){
        data.push(add);
        //console.log(add);
        console.log("data to be added " + add );
        callback()
       // }
    }, 3000);
}

function b(){
    setTimeout(() => {
       // for(let i=0;i<data.length;i++){
        let arr = []
        data.forEach(arrElement =>{
            data.push(arr)
            arr = arr+arrElement
            console.log("data in the arr" + arr)
           // console.log(arr)
        })
   // }
    }, 1000);
}

let newArr = [7]
a(newArr,b)