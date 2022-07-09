
class player{
    constructor(){
        let name,runs;
    }
    getName(){
        return this.myName;
    }
    setName(name){
        this.myName = name;
    }
    getRuns(){
        return this.myRuns
    }
    setRuns(runs){
        this.myRuns = runs;
    }
}

let res = new player();
res.setName("arnab")
res.setRuns(100)
console.log(res.getName(),res.getRuns())