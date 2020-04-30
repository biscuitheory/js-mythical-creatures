class Vampire {
    constructor(name, pet = 'bat', thirsty = true){
        this._name = name;
        this._pet = pet;
        this._thirsty = thirsty;
    }

    drink(){
        this._thirsty = false
    }
    
    get name(){
        return this._name
    }

    get pet(){
        return this._pet
    }

    get thirsty(){
        return this._thirsty
    }
}

module.exports = Vampire;