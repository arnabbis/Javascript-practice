

class student{
    constructor(name,age,year){
        this.myName = name;
        this.myAge = age;
        this.myYear = year;
    }
        bioData(){
           return `my name is ${this.myName} , my age is ${this.myAge} , my date of birth is ${this.myYear}`
        }
    
}
// 
class players extends student{   // INHERITING THE PROPERTIES OF ITS PARENT CLASS
    constructor(name,age,year,game){       // TWO TYPE OF INHERITANCE = STATIC,INSTANCE
        super(name,age,year);
        this.myGame = game;
}
    stu_bioData(){
    return `${super.bioData()} , my favourite game is ${this.myGame}`
}                          
}

let obj = new players("arnab",26,"btech","football")
//let obj1 = new players("rakesh",34,"bs")
console.log(obj.stu_bioData())