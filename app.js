// This is my function that sums two numbers
const sum = function(a,b)  {
    return a + b
}

// Just a console log for ourselves
console.log(sum(7,3))

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)


// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
};

console.log(oneEuroIs.JPY)
console.log(oneEuroIs.USD)

const fromDollarToYen = function(amount) {
    return amount*oneEuroIs.JPY/oneEuroIs.USD
}

const fromEuroToDollar = function(amount)  {
    return amount*oneEuroIs.USD
}

const fromYenToPound = function(amount) {
    return amount*oneEuroIs.GBP/oneEuroIs.JPY
}


module.exports = {sum,fromEuroToDollar,fromDollarToYen, fromYenToPound };
