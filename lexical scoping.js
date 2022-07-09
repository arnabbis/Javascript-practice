
let name = "arnab"

let studingAt = "functionUp"

function arnab(age,place){
    let qualification = "btech(cse)"
    console.log(name +" is a "+ qualification + " his age is " + age + " he is from " + place + " he is studing at " + studingAt ) //" which company does he work now " + company )
    function rakesh(company){
        return "which company does he work now " + company 
    }
    return rakesh
}

let ruby = arnab(20,"durgapur")
console.log(ruby("google"))
//arnab("durgapur")
//let studingAt = "functionUp"