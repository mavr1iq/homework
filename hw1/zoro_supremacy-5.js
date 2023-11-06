function highAndLow(numbers){
    let array = numbers.split(' ');
    let max = Math.max(...array);
    let min = Math.min(...array);
    return max + " " + min;
}
console.log(highAndLow("1186 982 2448 3217 2846 1829 572 2558 2970 1544 2394 3427 615 1902 787 619 3282 2106 1455 346 925"))