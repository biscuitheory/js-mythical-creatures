class Pirate {
    constructor(name, job = 'Scallywag', cursed = false, booty = 0){
        this._name = name
        this._job = job
        this._cursed = cursed
        this._count = 0
        this._booty = booty
    }

    commitHeinousAct(){
        this._count++
        if (this._count == 3){
            return this._cursed = true
        }
    }

    robShip() {
        this._booty++
        if (this._booty = 100){
            return 'YAARRR!'
        }
    }

    get name(){
        return this._name
    }

    get job(){
        return this._job
    }

    get cursed(){
        return this._cursed
    }

    get booty(){
        return this._booty
    }
}

module.exports = Pirate