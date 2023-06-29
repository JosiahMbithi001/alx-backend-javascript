export default class Airport {
    constructor(name, code) {
       if(typeof name === 'string'){
            this._name = name
       } else {
            throw new TypeError('name is not a string')
       }
       if(typeof code === 'string'){
            this._code = code
       } else {
            throw new TypeError('code is not string')
       }
    }
    toString() {
        return (`[object ${this._code}]`)
    }

}
