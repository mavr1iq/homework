var Vector = function (components) {
    this.array = components
    this.values = function(){
        return this.array
    }
    this.check = function(Vector){
        let vector = Vector.values()
        if (this.array.length != vector.length) throw new Error
    }
    this.add = function(vector){
        this.check(vector)
        let result = []
        vector = vector.values()
        for (let el in vector){
            result.push(this.array[el] + vector[el])
        }
        console.log(result)
        return new Vector(result)
    }
    this.subtract = function(vector){
        this.check(vector)
        let result = []
        vector = vector.values()
        for (let el in vector){
            result[el] = this.array[el] - vector[el]
        }
        console.log(result)
        return new Vector(result)
    }
    this.dot = function(vector){
        this.check(vector)
        let result = 0
        vector = vector.values()
        for (let el in vector){
            result += this.array[el] * vector[el]
        }
        return result
    }
    this.norm = function(){
        let toSqrt = 0
        for (let el in this.array){
            toSqrt += Math.pow(this.array[el], 2)
        }
        return Math.sqrt(toSqrt)
    }
    this.toString = function(){
        return '(' + this.array.join(',') + ')'
    }
    Vector.prototype.equals = function(Vector){
        return this.toString() === Vector.toString()
    }
};
let a = new Vector([1, 2]);
let b = new Vector([3,4]);
let c = new Vector([5, 6, 7, 8]);
a.add(b)
a.subtract(b)
console.log(a.dot(b))
console.log(a.norm())
console.log(a.add(b).equals(new Vector([4,6])))