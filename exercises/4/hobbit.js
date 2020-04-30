class Hobbit {
    constructor(name, disposition = 'homebody', age = 0, adult, isShort = true, old, hasRing){
        this._name = name
        this._disposition = disposition
        this._age = age
        this._adult = adult
        this._isShort = isShort
        this._old = old
        this._hasRing = hasRing
    }

    celebrateBirthday(){
        this._age++
    }

    get name(){
        return this._name
    }

    get disposition(){
        return this._disposition
    }

    get age(){
        return this._age
    }

    get adult(){
        if (this._age < 33){
            return this._adult = false
        } else {
            return this._adult = true
        }
    }

    get isShort(){
        return this._isShort
    }

    get old(){
        if (this._age > 100) {
            return this._old = true
        } else {
            return this._old = false
        }
    }

    get hasRing(){
        if (this._name === 'Frodo'){
            return this._hasRing = true
        } else {
            return this._hasRing = false
        }
    }
}

module.exports = Hobbit