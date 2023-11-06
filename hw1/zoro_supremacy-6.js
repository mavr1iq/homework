function descendingOrder(num){
    let array = num.toString().split('');
    let result = '';
    let length = array.length;
    for (let i = 0;i<length;i++){
        result += Math.max(...array);
        array.splice(array.indexOf(Math.max(...array).toString()),1)
    }
    return parseInt(result);
}
console.log(descendingOrder(88568))