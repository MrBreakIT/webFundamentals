
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



console.log("Problem #6: Array- Second Largest");
function secondLargest(arr) {
    var max = -Infinity, secondMax = -Infinity;
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] >= max) {
            secondMax = max
            max = arr[i]
        }
        else if (arr[i] < max && arr[i] > secondMax) {
            secondMax = arr[i]
        }
    }
    return secondMax
}
console.log(secondLargest[42, 1, 4, 3, 14, 7]);
