var end = "end"; // phrase to type into readability() function to console.log end of program statement
function readability(input) {
    console.log(
        "----------------------------------------------------------------------------------------------------"
    );
    if (input == "end") {
        console.log("                                       End of Program");
    } else if (input !== "end") {
        // simple check for people entering other variables `end` or nothing at all into the function
        console.log("                                       Next Function");
    }
    console.log(
        "----------------------------------------------------------------------------------------------------"
    );
    return 0;
}

console.log("Problem #1:  ");
function a() {
    return 35;
}
console.log(a())
readability();


console.log("Problem #2:  ");
function a() {
    return 4;
}
console.log(a() + a());
readability();


console.log("Problem #3:  ");
function a(b) {
    return b;
}
console.log(a(2) + a(4));
readability();


console.log("Problem #4:  ");
function a(b) {
    console.log(b);
    return b * 3;
}
console.log(a(3));
readability();


console.log("Problem #5:  ");
function a(b) {
    return b * 4;
    console.log(b);
}
console.log(a(10));
readability();


console.log("Problem #6:  ");
function a(b) {
    if (b < 10) {
        return 2;
    }
    else {
        return 4;
    }
    console.log(b);
}
console.log(a(15));
readability();


console.log("Problem #7:  ");
function a(b, c) {
    return b * c;
}
console.log(10, 3);
console.log(a(3, 10));
readability();


console.log("Problem #8:  ");
function a(b) {
    for (var i = 0; i < 10; i++) {
        console.log(i);
    }
    return i;
}
console.log(3);
console.log(4);
readability();


console.log("Problem #9:  ");
function a() {
    for (var i = 0; i < 10; i++) {
        i = i + 2;
        console.log(i);
    }
}
a();
readability();


console.log("Problem #10:  ");
function a(b, c) {
    for (var i = b; i < c; i++) {
        console.log(i);
    }
    return b * c;
}
a(0, 10);
console.log(a(0, 10));
readability();


console.log("Problem #11:  ");
function a() {
    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            console.log(j);
        }
        console.log(i);
    }
}
readability();


console.log("Problem #12:  ");
function a() {
    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            console.log(i, j);
        }
        console.log(j, i);
    }
}
readability();


console.log("Problem #13:  ");
var z = 10;
function a() {
    var z = 15;
    console.log(z);
}
console.log(z);
readability();


console.log("Problem #14:  ");
var z = 10;
function a() {
    var z = 15;
    console.log(z);
}
a();
console.log(z);
readability();


console.log("Problem #15:  ");
var z = 10;
function a() {
    var z = 15;
    console.log(z);
    return z;
}
z = a();
console.log(z);
readability();























