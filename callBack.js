setTimeout(function(){
    console.log("ARNAB")
},5000)

function x(y){
    console.log("X")
   y()
}

setTimeout(function(){
    console.log("NAMASTE JAVASCRIPT")
},1000)

x(function y(){
    console.log("Y")
})

