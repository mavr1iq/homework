function findEvenIndex(arr) {
    for (let i = 0;i<arr.length;i++){
        let SumR = 0;
        let SumL = 0;
        for (let n = 0; n < i;n++) SumL += arr[n]
        for (let m = i+1; m < arr.length; m++) SumR += arr[m]
        if (SumR === SumL) return i;
    }
    return -1;
}
console.log(findEvenIndex([1,2,3,4,3,2,1]))