class Building {
  constructor(sqft) {
    if(this.constructor === Building) {
      throw new Error("Abstract class building cannot be instantiated directly");
    }
    this._sqft = sqft;
  }
 
  get sqft() {
    return this._sqft;
  }

  call() {
    if(typeof this.evacuationWarningMessage  === 'function') {
      return this.evacuationWarningMessage());
    } else {
        throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }
}

export default Building;
