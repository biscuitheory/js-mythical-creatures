class Unicorn {
  constructor(name, color = 'white') {
    this._name = name;
    this._color = color;
  }

  isWhite(color) {
    return color === 'white'
  }

  says(phrase) {
    return `**;* ${phrase} *;**`
  }

  get name() {
    return this._name
  }

  get color() {
    return this._color;
  }
}

module.exports = Unicorn;
