class Dragon {
    constructor(name, rider, color, hungry = true){
        this._name = name
        this._rider = rider
        this._color = color
        this._hungry = hungry
        this._count = 0
    }

    eat(){
        this._count++
        if(this._count == 3){
            this._hungry = false
        }
    }

    get name(){
        return this._name
    }

    get rider(){
        return this._rider
    }

    get color(){
        return this._color
    }

    get hungry(){
        return this._hungry
    }
} 

module.exports = Dragon;