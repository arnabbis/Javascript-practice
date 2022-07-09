
function arnab(){
    return new Promise (function(resolve,reject){
        setTimeout(() => {
            let error = true;
            if(!error){
            console.log("I AM AT FUNCTIONUP AND I WANT A JOB");
            resolve(" yes you can get ");
            }else{
                console.log("you can get if you study hard");
                reject(" otherwise you will fail ")
            }
        }, 3000);
    })
}
arnab().then(function(){
    console.log(" congratulation you got job ")
}).catch(function(error){
    console.log(" sorry beter luck next time " + error)
})