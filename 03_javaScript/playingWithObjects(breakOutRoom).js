// Makes each function easier to read on console.
var start = "start", // Makes each function easier to read on console.
    end = "end"; // phrase to type into readability() function to console.log end of program statement

function readability(input) {
    // console.log(
    //     "----------------------------------------------------------------------------------------------------"
    // );
    // console.log(
    //     "****************************************************************************************************"
    // );
    // console.log(
    //     "----------------------------------------------------------------------------------------------------"
    // );
    if (input == "start") {
        console.log("-----<<<<<  Start of Program    >>>>>-----");
        console.log();
    } else if (input == "end") {
        console.log("-----<<<<<  End of Program    >>>>>-----");
        console.log();
    } else if (input !== "start" && input !== "end") {
        // simple check for people entering other variables `end` or nothing at all into the function
        console.log("<<<<<  Next Function  >>>>>");
        console.log();
    }
    return 0;
}

var users = [
    { name: "Michael", age: 37 },
    { name: "John", age: 30 },
    { name: "David", age: 27 },
];

readability(start);
console.log("Print/log all the objects");
console.log(users[0] + ", " + users[1] + ", " + users[2]);
console.log();
readability();


console.group("Print/log John's name & age to console.");
console.log(users[1].name + " is " + users[1].age);
console.log();
readability();

console.log("Print/log the name of the first object?");
console.log(users[0].name);
console.log();
readability();

console.log("Print/log the name and age of each user using a for loop?");
for (var i = 0; i < users.length; i++) {
    console.log(users[i]);
}
console.log();
readability(end);
