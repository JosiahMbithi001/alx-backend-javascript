export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  set SetCode(code) {
    this._code = code;
  }

  set SetName(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }

  displayFullCurrency() {
    return (`${this._name}  ${this._code}`);
  }
}
