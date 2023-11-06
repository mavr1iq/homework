function filterItems(item) {
    let b = item.split('');
    let a = arr[0].split('');
    let c;
    a.sort();
    b.sort();
    if (b.toString() === a.toString()){
        return item;
    }else return 0
}
let arr = ["tsar", "rat", "tar", "star", "tars", "cheese"]; // вносити анаграми
let c;
let temp;
let result = [];
for (let k in arr){
    temp = arr.filter((word) => );
    for (let i in temp){
        c = arr.indexOf(temp[i]);
        arr.splice(c,1);
    }
    result.push(temp)
}
result.push(arr)
console.log(result)
