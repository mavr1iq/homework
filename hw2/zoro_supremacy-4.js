function unpackSausages(truck) {
    let count = 0;
    let result = ''
    let toGive = ''
    for (let boxes in truck){
        for(let packages in truck[boxes]){
            let shift = truck[boxes][packages].split('').shift()
            let pop = truck[boxes][packages].split('').pop()
            let len = truck[boxes][packages].split('').length
            if (shift === '[' && pop === ']' && len === 6){
                let sausages = truck[boxes][packages].split('')
                sausages.pop()
                sausages.shift()
                for (let n = 0, i = 1; n < sausages.length; n++, i++){
                    if (sausages[n] !== sausages[i] && sausages[i] !== undefined) break
                    toGive += sausages[n]
                }
                if (toGive.split('').length === 4){
                    count++
                    if (count%5 !== 0) result += toGive
                }
                toGive = ''
            }
        }
    }
    result = result.split('')
    result = result.join(' ')
    return result;
}