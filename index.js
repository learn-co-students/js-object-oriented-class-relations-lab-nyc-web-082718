let driverID = 0;
let passengerID = 0;
let tripID = 0;
let store = {};
store.drivers = [];
store.passengers = [];
store.trips = []



class Driver {
  constructor(name){
    this.name = name;
    this.id = ++driverID;
    store.drivers.push(this)
  }
  trips(){
    return store.trips.filter(trip => trip.driverId === this.id)
  }
  passengers(){
    return store.passengers.filter(passenger =>
    passenger.trips().map(
      trip => trip.driverId
    ).includes(this.id))
  }
}

class Passenger {
  constructor(name){
    this.name = name;
    this.id = ++passengerID;
    store.passengers.push(this)
  }
  trips(){
    return store.trips.filter(trip => trip.passengerId === this.id)
  }
  drivers(){
    return store.drivers.filter(driver =>
    driver.trips().map(
      trip => trip.passengerId
    ).includes(this.id))
  }
}

class Trip {
  constructor(driver,passenger){
    this.driverId = driver.id
    this.passengerId = passenger.id
    this.id = ++tripID;
    store.trips.push(this)
  }
  driver(){
    return store.drivers.find(driver => driver.id === this.driverId)
  }
  passenger(){
    return store.passengers.find(passenger => passenger.id === this.passengerId)
  }
}
