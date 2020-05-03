class Wizard {
    constructor({name, bearded = true, isRested = true, count = 0}){
        this._name = name
        this._bearded = bearded
        this._isRested = isRested
        this._count = count
    }

    incantation(formuleMagique){
       return formuleMagique.toUpperCase()
    }

    cast(){
        this._count++
        if (this._count >= 3){
            this._isRested = false
            return 'I SHALL NOT CAST!'
        }
        return 'MAGIC BULLET'
    }

    get name(){
        return this._name
    }

    get bearded(){
        return this._bearded
    }

    get isRested(){
        return this._isRested
    }

}
module.exports = Wizard