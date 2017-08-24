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

// Define a skeleton vehicle factory
function VehicleFactory() {}

// Define the prototypes and utilities for this factory
// default vehicleClass is a Car
VehicleFactory.prototype.vehicleClass = Car;

// Our Factory method for creating new Vehicle instances
VehicleFactory.prototype.createVehicle = function (options) {
  switch(options.vehicleType){
    case 'car':
      this.vehicleClass = Car;
      break;
    case 'truck':
      this.vehicleClass = Truck;
      break;
    //defaults to VehicleFactory.prototype.vehicleClass (Car)
  }

  return new this.vehicleClass(options);
};

// Create an instance of our factory that makes cars
const carFactory = new VehicleFactory();
const car = carFactory.createVehicle({
  vehicleType: 'car',
  color: 'yellow',
  doors: 6
});


// Test to confirm our car was created using the vehicleClass/prototype Car
console.log(car instanceof Car); // true
console.log(car); // Car object of color "yellow", doors: 6 in a "brand new" state

// approach 1: modify a vehicleFactory instance to use the truck class
const movingTruck = carFactory.createVehicle({
  vehicleType: 'truck',
  state: 'like new',
  color: 'red',
  wheelSize: 'small'
});

console.log(movingTruck instanceof Truck); // true
console.log(movingTruck); // Truck object of color "red", a "like new" state and a "small" wheelSize

// Approach 2: Subclass VehicleFactory to create a factory class that builds Trucks
function TruckFactory() {}
TruckFactory.prototype = new VehicleFactory();
TruckFactory.prototype.vehicleClass = Truck;

const truckFactory = new TruckFactory();
const myBigTruck = truckFactory.createVehicle({
  state: 'cool',
  color: 'pink',
  wheelSize: 'big'
});

console.log(myBigTruck instanceof Truck); // true
console.log(myBigTruck); // Truck object with color "pink", wheelSize "big" and state "cool"
