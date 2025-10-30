//Take a number and print whether it’s positive, negative, or zero.

let number = Number(prompt("Enter a number"));
console.log(number);
if (isNaN(number)){
    console.log("That's not a valid number!");
}
if (number > 0) {
    console.log("the number is positive!")
}
else if (number < 0){
    console.log("the number is negative");
}
else if (number == 0){
    console.log("the number is zero");
}
