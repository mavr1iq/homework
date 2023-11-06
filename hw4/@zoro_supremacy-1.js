function VigenèreCipher(key, abc) {
    this.encode = function (str) {
      const len = key.length
      let tempKey = key
      while (tempKey.length !== str.length){
        let charIndex = 0
        while (charIndex !== len){
          if (tempKey.length === str.length) break
            if (str.length > tempKey.length)tempKey += tempKey[charIndex]
            else tempKey = tempKey.slice(0, -1)
            charIndex++
        }
      }
      const alpabet = abc.split('')
      let result = []
      for (let index = 0;index < str.length;index++){
        let resultIndex = alpabet.indexOf(tempKey.split('')[index]) + alpabet.indexOf(str.split('')[index])
        if ( alpabet.indexOf(tempKey.split('')[index]) !== -1 && alpabet.indexOf(str.split('')[index])!== -1){
            if (resultIndex > alpabet.length) resultIndex -= alpabet.length
            result.push(alpabet[resultIndex])
        }else result.push(str.split('')[index])
      }
      return result.join('')  

    };
    this.decode = function (str) {
      const len = key.length
      let tempKey = key
      while (tempKey.length !== str.length){
        let charIndex = 0
        while (tempKey.length !== str.length && charIndex !== len){
            if (str.length > tempKey.length)tempKey += tempKey[charIndex]
            else tempKey = tempKey.slice(0, -1)
            charIndex++
        }
      }
      const alpabet = abc.split('')
      let result = []
      for (let index = 0;index < str.length;index++){
        let resultIndex = alpabet.indexOf(str.split('')[index]) - alpabet.indexOf(tempKey.split('')[index])
        if ( alpabet.indexOf(tempKey.split('')[index]) !== -1 && alpabet.indexOf(str.split('')[index])!== -1){
            if (resultIndex > alpabet.length) resultIndex -= alpabet.length
            else if(resultIndex < 0) resultIndex += alpabet.length
            result.push(alpabet[resultIndex])
        }else result.push(str.split('')[index])
      }
      return result.join('')  
    };
  }
  
const abc = "abcdefghijklmnopqrstuvwxyz"
let key = "pizza"
const test = new VigenèreCipher(key,abc)
console.log(test.encode("pancakes"))
console.log(test.decode("eimbazmr"))