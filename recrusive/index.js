function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) ) {
        return true;
    } else {
        return false;
    }
}
let years =[2025,2007,2020,2001]; 
    for (let i = 0; i< years.length; i++) {
   if (isLeapYear(years[i])) {
    console.log(years[i] + " est une année bissextile.");
} else {
    console.log(years[i] + " n'est pas une année bissextile.");
}
    }
    function tickcenima(age) {
        if (age <=12) {
            return "10dt"
        }
        else if ((13<age )&&(age<17)){
            return "15dt"
        }
        else if (age>=18){
            return "20dt"
        }
    }
    console.log(tickcenima(20));
    function fibonacci(n) {
        // Base case: if n is 0 or 1, return n
        if (n === 0) {
            return 0;
        } else if (n === 1) {
            return 1;
        }
        // Recursive case: return the sum of the two preceding Fibonacci numbers
        else {
            return fibonacci(n - 1) + fibonacci(n - 2);
        }
    }
    console.log(fibonacci(0));