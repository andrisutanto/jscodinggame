const compareNumber = (num1,num2) => {
    if(num1 < num2) {
        return "second number higher";
    } else if (num1 === num2) {
        return  "number equal";
    } else if (num1 > num2) {
        return "first number higher";
    }
}

console.log(compareNumber(1,7));