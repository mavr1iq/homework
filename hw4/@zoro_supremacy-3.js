class Warrior{
    constructor(){
        this.exp = 100
        this.expCalc()
        this.achieve = []
    }
    level(){return this.lvl}
    experience(){return this.exp}
    rank(){return this.rnk}
    achievements(){return this.achieve}
    expCalc(){
        if (this.exp > 10000) this.exp = 10000
        this.lvl = Math.floor(this.exp/100)
        this.rankCalc()
    }
// "Pushover", "Novice", "Fighter", "Warrior", "Veteran", "Sage", "Elite", "Conqueror", "Champion", "Master", "Greatest"
    rankCalc(){
        const ranks = ["Pushover", "Novice", "Fighter", "Warrior", "Veteran", "Sage", "Elite", "Conqueror", "Champion", "Master", "Greatest"]
        this.rnk = ranks[Math.floor(this.exp/1000)]
    }
    battle(lvl){
        if (lvl < 1 || lvl > 100) return "Invalid level"
        let diff = this.lvl - lvl
        switch (true){
            case (diff == 0):
                this.exp += 10
                this.expCalc()
                return "A good fight"
            case (diff == 1):
                this.exp += 5
                this.expCalc()
                return "A good fight"
            case (diff > 1):
                return "Easy fight"
            case (Math.floor(lvl/10) > Math.floor(this.lvl/10) && diff <= -5 ):
                return "You've been defeated"
            case (diff < 0):
                this.exp += 20 * (diff**2)
                this.expCalc()
                return "An intense fight"
        }
        
    }
    training(arr){
        if (arr[2] > this.lvl) return "Not strong enough"
        let tempArr = [...this.achieve]
        tempArr.push(arr[0])
        this.achieve = tempArr
        this.exp += arr[1]
        this.expCalc()
        return arr[0]
    }
}
var bruce_lee = new Warrior()
console.log(
    bruce_lee.level(),        // => 1
    bruce_lee.experience(),   // => 100
    bruce_lee.rank(),         // => "Pushover"
    bruce_lee.achievements(), // => []
    bruce_lee.training(["Defeated Chuck Norris", 9000, 1]), // => "Defeated Chuck Norris"
    bruce_lee.experience(),   // => 9100
    bruce_lee.level(),        // => 91
    bruce_lee.rank(),         // => "Master"
    bruce_lee.battle(90),     // => "A good fight"
    bruce_lee.experience(),   // => 9105
    bruce_lee.achievements())