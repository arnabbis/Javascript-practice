let a = [
    {name:"arnab",ocupation:"doctor"},
    {name:"rakesh",ocupation:"engineer"}
]; // server site sa a raha hai http request kar rahe ho to .

function b(c,callback){
    setTimeout(() => {
        a.push(c)
        console.log("data to be printed");
        callback()
        },8000); 
    }
    // calback : function inside a function is called callback where one function has the power 
    // to control thye flow of data inthe second function

function d(){
    setTimeout(() => { // asynchcronous function 
        let str = "";
        a.forEach(element => { /// synchronous function
            str = str+`${element.name}`
            console.log(str)
            console.log("data to be fetched")
        });
    }, 1000);
}

//let newStu = {name:"ruby",ocupation:"layer"}
b({name:"ruby",ocupation:"layer"},d)
//d()
