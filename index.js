let driverId = 0;

let store = {drivers:[], passengers:[], trips:[]}
class Driver{
  constructor(name) {
    this.name = name;
    this.id = ++driverId;
    store.drivers.push(this)
  }

  trips() {
    return store.trips.filter(function(trip){
      return trip.driverId === this.id;
    }.bind(this));
  }

  passengers() {
    let passengersList = this.trips().map(function(trip){
      return trip.passengerId;
    }.bind(this));
    return store.passengers.filter(function(passenger){
      return passengersList.indexOf(passenger.id) > -1
    })
  }

}

let passengerId = 0;
class Passenger{
  constructor(name) {
    this.name = name;
    this.id = ++passengerId;
    store.passengers.push(this);
  }

  trips() {
    return store.trips.filter(function(trip){
      return trip.passengerId === this.id;
    }.bind(this));
  }

  drivers() {
  let driversList = this.trips().map(function(trip){
    return trip.driverId;
  }.bind(this));
  return store.drivers.filter(function(driver){
    return driversList.indexOf(driver.id) > -1
  })
}

}

let tripId = 0;
class Trip{
  constructor(driver, passenger) {
    this.id = ++tripId;
    if(driver) {
      this.driverId = driver.id;
    }

    if(passenger) {
      this.passengerId  = passenger.id;
    }

    store.trips.push(this)

  }


  driver() {
    return store.drivers.find(function(driver) {
      return driver.id === this.driverId;
    }.bind(this));
  }

  passenger() {
    return store.passengers.find(function(passenger) {
      return passenger.id === this.passengerId;
    }.bind(this));
  }

}

let driver = new Driver("Alfie")
let passenger = new Passenger("Bob")
let firstTrip = new Trip(driver, passenger)
let secondPassenger = new Passenger("Susan")
let secondTrip = new Trip(driver, secondPassenger)
