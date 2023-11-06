function RootProperty(array,value,result){
    let i = 1;
    if (Array.isArray(array) && array.includes(value)){
        return console.log(array)
    }
    else {
        for (let sub of Object.values(array)){
            i++
            RootProperty(sub,value)
        }
    }
}
object = {
    "r1n": {
        "mkg": {
            "zma": [21, 45, 66, 111],
            "mii": {
                "ltf": [2, 5, 3, 9, 21]
            },
            "fv": [1, 3, 6, 9]
        },
        "rmk": {
            "amr": [50, 50, 100, 150, 250]
        }
    },
    "fik": {
        "er": [592, 92, 32, 13],
        "gp": [12, 34, 116, 29]
    }
}
RootProperty(object,29);