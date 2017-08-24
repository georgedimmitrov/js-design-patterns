function Car() {
  this.name = 'Car';
  this.wheels = 4;
  this.brand = 'Honda';
}

function Truck() {
  this.name = 'Truck';
  this.wheels = 6;
  this.brand = 'Volvo';
}

function Bike() {
  this.name = 'Bike';
  this.wheels = 2;
  this.brand = 'Specialized';
}

const vehicleFactory = {
  createVehicle(type) {
    switch (type.toLowerCase()) {
      case 'car':
        return new Car();
      case 'truck':
        return new Truck();
      case 'bike':
        return new Bike();
      default:
        return null;
    }
  }
};

const car = vehicleFactory.createVehicle('Car'); // Car { name: "Car", wheels: 4, Brand: "Honda"}
const truck = vehicleFactory.createVehicle('Truck'); // Truck { name: "Truck", wheels: 6, Brand: "Volvo"}
const bike = vehicleFactory.createVehicle('Bike'); // Bike { name: "Bike", wheels: 2, Brand: "Specialized"}
const unknown = vehicleFactory.createVehicle('Boat'); // null (Vehicle not known)
