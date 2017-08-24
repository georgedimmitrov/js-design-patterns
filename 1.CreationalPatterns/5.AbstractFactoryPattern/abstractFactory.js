// Uses:
// When our object or component setup involves a high level of complexity
// When we need to easily generate different instances of objects depending on the environment we are in
// When we're working with many small objects or components that share the same properties
// When composing objects with instances of other objects that need only satisfy an API contract (aka, duck typing) to work. This is useful for decoupling.

function Car(options) {
  // defaults
  this.doors = options.doors || 4;
  this.state = options.state || 'brand new';
  this.color = options.color || 'silver';
}

function Truck(options) {
  this.state = options.state || "used";
  this.wheelSize = options.wheelSize || "large";
  this.color = options.color || "blue";
}

function Bike() {
  this.state = options.state || "used";
  this.wheelSize = options.wheelSize || "medium";
  this.color = options.color || "green";
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
