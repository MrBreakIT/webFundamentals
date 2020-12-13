
console.log("---<<<  Print Odds 1-20  >>>---");
for (i = 1; i <= 20; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
}
console.log("------------------------");


console.log("---<<<  Sum and Print 1-5  >>>---");
var sum = 0;
for (var i = 1; i <= 5; i++) {
    sum = sum + i;
    console.log("Number: " + i + " with a sum of " + sum);
}
console.log("------------------------");