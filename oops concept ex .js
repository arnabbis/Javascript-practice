

class employee{
    constructor(name,age,company){
        this.myName = name;
        this.myAge = age;
        this.MyCompany = company;

    }
     working(){
        return `my name is ${this.myName} , my age is ${this.myAge} , i work for ${this.MyCompany}`
    }
}

class perks extends employee{ // INHETANCE ARE OF TWO TYPES = STATIC , INSTANCE
    constructor(name,age,company,salary){
        super(name,age,company)
        this.mySalary = salary;
    }
    salary_working(){
        return `${super.working()} , my salary is ${this.mySalary}`
    }
}

class workingHours extends perks{
    constructor(name,age,company,salary,time){
        super(name,age,company,salary)
        this.myTime = time;
    }
    time_working(){
        return `${super.salary_working()} , my timing in office is ${this.myTime}`
    }
}
let obj = new employee("arnab",40,"google");
let obj1 = new workingHours("rakesh",36,"apple","75,00,000","9hrs");
console.log(obj1.time_working())