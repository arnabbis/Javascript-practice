function counter(){
var count = 0
 return function incrementCounter(){

    count ++                                // data hiding with the help of closure where a spercific data cannot be accessed by the other user and it is hide 
    console.log(count)
}
}

var counter1 = counter()
counter1();counter1()

var counter2 = counter()
counter2();counter2()


function counter(){
    var count = 0
      this.incrementCounter = function(){
        count ++                                
        console.log(count)
      }

        this.decrementCounter = function(){
            count --                               
            console.log(count)

    }
    }

    var counter1 = new counter();
    counter1.incrementCounter()
    counter1.incrementCounter()


    counter1.decrementCounter()
    counter1.decrementCounter()
    counter1.decrementCounter()




