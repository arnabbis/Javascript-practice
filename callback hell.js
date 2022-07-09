
// call back hell is a pyramid like structure where the code becomes very problamatic to read , handel erreor , and to change the code in the future.
function arnab(){
    setTimeout(() => {
        let roll_no = [2,3,4,5,6,7]
        console.log(roll_no);

        setTimeout((rakesh) => {
            let obj = {
                name:"rakesh",
                hobbi:"palying"
            };
            console.log(`this is my rollno =  ${rakesh} , this is my ${obj.name} , this is my ${obj.hobbi} `)

            setTimeout((rollno) => {
                let obj1 = {
                    name:"vikash",
                    hobbi:"travelling"
                }
                console.log(`this is my rollno =  ${rollno} , this is my ${obj1.name} , this is my ${obj1.hobbi} `)
            }, 8000,roll_no[1]);
    }, 2000,roll_no[3]);

    
    }, 5000);
}
arnab()
