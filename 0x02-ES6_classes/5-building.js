export default class Building{
    constructor(sqft){
        if(new.target !== Building && this.evacuationWarningMessage === undefined){
        throw new Error('Class extending Building must override evacuationWarningMessage')
    }
       if (typeof sqft === 'number'){
            this._sqft = sqft
        } else {
            throw new Error('sqft is not a number')
        }
    }
    get sqft(){
        return this._sqft;
    }
}
