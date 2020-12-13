// Generate Coin Change: Change is inevitable(especially when breaking a twenty).Make generateCoinChange(cents).Accept a number of American cents, compute and print how to represent that amount with smallest number of coins.Common American coins are pennies(1 cent), nickels(5 cents), dimes(10 cents), and quarters(25 cents).

// Example output: given (94): 94 cents can be represented by: quarters: 3, dimes: 1, nickels: 1, pennies: 4
// 2nd: can you simplify/shorten your code?
// 3rd: add half-dollar (50 cents) and dollar (100 cents) coins with 40 additional characters or less.

var end = "end"; // phrase to type into readability() function to console.log end of program statement
function readability(input) {
    console.log(
        "----------------------------------------------------------------------------------------------------"
    );
    if (input == "end") {
        console.log("End of Program");
    } else if (input !== "end") {
        // simple check for people entering other variables `end` or nothing at all into the function
        console.log("Next Function");
    }
    console.log(
        "----------------------------------------------------------------------------------------------------"
    );
    return 0;
}

console.log("---<<<  Option 1  >>>---");
function generateCoinChange1(cents) {
    var quarters = 0;
    var dimes = 0;
    var nickels = 0;
    var pennies = 0;

    while (cents >= 25) {
        quarters++;
        cents -= 25;
    }
    while (cents >= 10) {
        dimes++;
        cents -= 10;
    }
    while (cents >= 5) {
        nickels++;
        cents -= 5;
    }
    while (cents >= 1) {
        pennies++;
        cents -= 1;
    }

    console.log("quarters: " + quarters);
    console.log("dimes: " + dimes);
    console.log("nickels: " + nickels);
    console.log("pennies: " + pennies);
}
generateCoinChange1(94);
readability();

//////////////////////////////////////////////////////////////////////////      Option 2  (careful- i think stack overflow??) - SchneiderBertrand     //////////////////////////////////////////////////////
console.log("---<<<  Option 2 - SchneiderBertrand >>>---")
let generateCoinChange2 = (money) => {
    let penny = 0, nickel = 0, dime = 0, quarter = 0;
    let amount;

    for (money; money > 0; money - amount) {
        console.log(`Running, money equal to ${money}`);
        if (money >= 25) {
            amount = 25;
            money -= amount;
            quarter++;
        } else if (money >= 10) {
            amount = 10;
            money -= amount;
            dime++;
        } else if (money >= 5) {
            amount = 5;
            money -= amount;
            nickel++;
        } else if (money >= 1) {
            amount = 1;
            money -= amount;
            penny++;
        }
    }

    console.log(`Quarter: ${quarter}, Dime: ${dime}, Nickel: ${nickel}, Penny: ${penny}`);
};


console.log(generateCoinChange2(121));
readability();


console.log("---<<<  Option 3 - EricViera  >>>---");
function generateCoinChange3(cents) {
    var quarters = 0;
    var dimes = 0;
    var nickels = 0;
    var pennies = 0;

    while (cents >= 25) {
        quarters++;
        cents -= 25;
    }
    while (cents >= 10) {
        dimes++;
        cents -= 10;
    }
    while (cents >= 5) {
        nickels++;
        cents -= 5;
    }
    while (cents >= 1) {
        pennies++;
        cents -= 1;
    }

    console.log("quarters: " + quarters);
    console.log("dimes: " + dimes);
    console.log("nickels: " + nickels);
    console.log("pennies: " + pennies);
}
generateCoinChange3(94)
readability();


console.log("---<<<  Option 4 - JoshWren  >>>---");
function generateCoinChange4(money) {
    var i = money,
        amount = 25,
        penny = 0,
        nickel = 0,
        dime = 0,
        quarter = 0;
    for (i; i > 0; i - amount) {
        if (i >= 25) {
            amount = 25;
            i -= amount;
            quarter++;
        } else if (i >= 10) {
            amount = 10;
            i -= amount;
            dime++;
        } else if (i >= 5) {
            amount = 5;
            i -= amount;
            nickel++;
        } else if (i >= 1) {
            amount = 1;
            i -= amount;
            penny++;
        }
    }

    console.log("Quarters: " + quarter);
    console.log("Dimes: " + dime);
    console.log("Nickels: " + nickel);
    console.log("Pennies: " + penny);
}

var cash = 122;
change = generateCoinChange4(cash);
readability();


console.log("---<<<  Option 5 - ShawnLockart  >>>---");
function generateCoinChange5(n) {
    var dollar = 0,
        halfDollar = 0,
        quarter = 0,
        dime = 0,
        nickel = 0,
        penny = 0;
    while (n >= 100) {
        // 75
        n -= 100;
        dollar++;
    }
    while (n >= 50) {
        // 75
        n -= 50;
        halfDollar++;
    }
    while (n >= 25) {
        n -= 25;
        quarter++;
    }
    while (n >= 10) {
        // 85
        n -= 10;
        dime++;
    }
    while (n >= 5) {
        // 90
        n -= 5;
        nickel++;
    }
    while (n >= 1) {
        // 94
        n -= 1;
        penny++;
    }
    return `Dollar: ${dollar}, Half Dollars: ${halfDollar}, Quarters: ${quarter}, Dimes: ${dime}, Nickels: ${nickel}, Pennies: ${penny}`;
}

console.log(generateCoinChange5(350));
readability();

// function gCC(n) {
//     // console.log(dollar);
//     var dollar = Math.floor(n / 100);
//     console.log(dollar);
//     n -= 100 * dollar;
//     console.log(dollar);
//     var halfDollar = Math.floor(n / 50);
//     console.log(halfDollar);
//     n -= 25 * halfDollar;
//     var quarter = Math.floor(n / 25);
//     console.log(quarter);
//     n -= 25 * quarter;
//     var dime = Math.floor(n / 10);
//     console.log(dime);
//     n -= 10 * dime;
//     var nickel = Math.floor(n / 5);
//     console.log(nickel);
//     n -= 5 * nickel;
//     var penny = Math.floor(n / 1);
//     console.log(penny);
//     n -= 1 * penny;
//     return `Dollar: ${dollar}, Half Dollars ${halfDollar}, Quarters: ${quarter}, Dimes ${dime}, Nickels: ${nickel}, Pennies ${penny}`;
// }
// console.log(gCC(394));


console.log("---<<<  from Anne's video- whileLoop >>>---");
var cents = 67;
var quarter = 0;
var dime = 0;
var nickel = 0;
var penny = 0;

console.log("Starting with " + cents + " cents");
while (cents >= 25) {
    quarter++;
    cents = cents - 25;
}
console.log("     minus " + quarter + " quarter(s)");
console.log("<<<  " + cents + " cents left" + "  >>>");
while (cents >= 10) {
    dime++;
    cents = cents - 10;
}
console.log("     minus " + dime + " dime(s)");
console.log("<<<  " + cents + " cents left" + "  >>>");
while (cents >= 5) {
    nickel++;
    cents = cents - 5;
}
console.log("     minus " + nickel + " nickel(s)");
console.log("<<<  " + cents + " cents left" + "  >>>");
while (cents >= 1) {
    penny++;
    cents = cents - 1;
}
console.log("     minus " + penny + " penny(s)");
console.log("<<<  " + cents + " cents left" + "  >>>");

// p = cents;
console.log("Quarters:", quarter + ", Dimes:", dime + ", Nickels:", nickel + ", Pennies:", penny);
readability();



console.log("---<<<  from Anne's video- mathOperater >>>---");
// var num = 3.72;
// console.log("The number " + num)
// console.log("Math operators: floor-" + Math.floor(num) + " ceil-" + Math.ceil(num) + " trunc-" + Math.trunc(num));


// NEED TO GO BACK THRU THIS ONE TO ENSURE ACCURACY.
cents = 93;
temp = 93;
var quarter = Math.trunc(temp / 25);
temp = temp % 25;
console.log(temp);
var dime = Math.trunc(temp / 10);                               // GO BACK AND REVIEW THIS ALGO.
temp = temp % 10;
console.log(temp);
var nickel = Math.trunc(temp / 5);
temp = temp % 5;
console.log(temp);
var penny = Math.trunc(temp / 1);
temp = temp % 1;
console.log(temp);

console.log(cents + " cents in change looks like: ");
console.log("Quarters:", quarter + ", Dimes:", dime + ", Nickels:", nickel + ", Pennies:", penny);
readability(end);












