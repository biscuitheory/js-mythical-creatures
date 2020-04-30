class Wizard {
    constructor({name, bearded = true, isRested = true}){
        this._name = name
        this._bearded = bearded
        this._isRested = isRested
        this._count = 0
    }

    incantation(formuleMagique){
       return formuleMagique.toUpperCase()
    }

    cast(){
        if (this._isRested == false){
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
        this._count++
        if (this._count = 3){
            return this._isRested = false
        } else {
        return this._isRested = true
        }
    }

}
// const wizard = new Wizard({name: 'Jhun'});
module.exports = Wizard