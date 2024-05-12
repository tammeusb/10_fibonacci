const fibonacci = function(n) {

    let previousValue = 0;
    let currentValue = 0;
    
    for (i = n; i > 0; i--) {
        let notYetPreviousValue = currentValue;
        currentValue = currentValue + previousValue;
        if (currentValue == 0) currentValue = 1;   
        previousValue = notYetPreviousValue;
        console.log(currentValue);
    }
    return currentValue
};

//
//will create the fibonacci sequence up to the arguent fibonacci(n)
//and return the last number in the generated sequence.
//e.g., fibonacci(3) ->
//1,1,2
//return 2

//declare two variables outside of loop scope - previousValue and currentValue.
//both values begin as 0. 
//first loop, add 0 to 0 to return 0, if 0 make it 1.
//next loo, add 0 to 1 to make 1.
//need another variable to turn last currentValue into previousValue before
//adding to changing currentValue.

// Do not edit below this line
module.exports = fibonacci;
