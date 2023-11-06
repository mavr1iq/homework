function isPrime(num){
    for (let i = 2;i<=Math.round(Math.sqrt(num));i++) {
        if (num % i === 0) return false
    }
    if (num <= 1) return false;
    else return true;
}
console.log(isPrime(73))