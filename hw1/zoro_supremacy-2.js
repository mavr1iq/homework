function Hanoi(disks){
    let def = 1;
    for (let i = 1;i<disks;i++){
        def = def*2+1;
    }
    return def;
}
console.log(Hanoi(1))