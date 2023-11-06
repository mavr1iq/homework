function Sum(num){
    let result = 0;
    for (let i = 0;i<num;i+=3){
        if (i%15 === 0) continue;
        result += i;
    }
    for (let n = 0;n<num;n+=5){
        result +=n;
    }
    return result;
}
console.log(Sum(10))
console.log(Sum(-5))
console.log(Sum(32))
console.log(Sum(81))
console.log(Sum(3))
console.log(Sum(0))