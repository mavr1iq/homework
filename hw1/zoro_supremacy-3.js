function findNb(m) {
    let cube = 1;
    while (m > 0){
        m -= cube**3;
        cube++;
    }
    if (m < 0){
        return -1;
    }
    return cube-1
}
console.log(findNb(103170082401))