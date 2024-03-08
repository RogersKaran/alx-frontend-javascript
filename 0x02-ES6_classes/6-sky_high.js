import Buildling from './5-building.js';

class SkyHighBuilding {
  constructor (sqft, floors) {
    this._sqft = sqft;
    this._floors = floors;
  }

  get sqft() {
    return this._sqft;
  }

  get floors() {
    return this._floors;
  }

  evacuationWarningMessage() {
    return `Evaluate slowly the ${this._floors} floors`;
  }
}

export default SkyHighBuilding;
