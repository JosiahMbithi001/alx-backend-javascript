//
import Currency from './3-currency';

export default class Pricing {
  constructor(amount, Currency) {
    this._amount = amount;
    this._currency = Currency;
  }

  set amount(value) {
  if (typeof value === 'number') {
    this._amount = value;
    } else {
        throw new Error('amount is not a number')
    }
  }

  set Currency(value) {
  if (currency instanceof Currecncy){
    this._currency = value;
    } else {
        throw new Error('currency is not currency')
    }
  }

  get amount() {
    return this._amount;
  }

  get Currency() {
    return this._currency;
  }

  displayFullPrice() {
    return (`${this._amount} ${this._currency.name} (${this._currency.code})`);
  }

  static convertPrice(amount, conversionRate) {
    if( typeof amount === 'number' && conversionRate === 'number') 
    return (this._amount * this._conversionRate);
  } else {
    throw new Error('amount and conversion rates are not numbers')
  }
}
