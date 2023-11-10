// Import the function sum from the app.js file
const { sum } = require('./app.js');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');
    

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
});

test("156.5 yen should be 0.87 pound", function() {
    // Import the function from app.js
    const { fromYenToPound } = require('./app.js');
    

    // Use the function like its supposed to be used
    const yen = fromYenToPound(156.5*3);

    // If 156.5 yen is 1 euro, and 1 euro is 0.87 pound then 156.5*3 yen should be (3 * 0.87)
    const expected = 3*0.87; 
    
    // This is the comparison for the unit test
     expect(fromYenToPound(156.5*3)).toBe(3*0.87); // If 156.5 yen is 1 euro, and 1 euro is 0.87 pound then 156.5*3 yen should be (3 * 0.87)
});


test("1.07 USD should be 156.5 yen", function() {
    // Import the function from app.js
    const { fromDollarToYen } = require('./app.js');
    

    // Use the function like its supposed to be used
    const yen = fromDollarToYen(1.07*3);

    // If 1.07 dollar is 1 euro, and 1 euro is 156.5 yen,  then 1.07*3 dollar should be (3 *156.5) yen
    const expected = 3*156.5; 
    
    // This is the comparison for the unit test
     expect(fromDollarToYen(1.07*3)).toBe(3*156.5); // If 1.07 dollar is 1 euro, and 1 euro is 156.5 yen,  then 1.07*3 dollar should be (3 *156.5) yen
});

