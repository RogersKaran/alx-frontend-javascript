import Car from './10-car.js';

class  EVCar {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  cloneCar() {
    const clonedCar = new Car();
    Object.getOwnPropertySymbols(this).forEach(symbol => {
      elementCar[symbol] = this[symbol];
    });
    return clonedCar;
  }
}

export default EVCar;
