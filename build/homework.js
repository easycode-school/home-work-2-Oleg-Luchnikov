//Task 1
class Car {
    constructor(mileage, fuel) {
        this.mileage = mileage;
        this.fuel = fuel;
    }
}
//Task 2
class Honda extends Car {
    constructor(mileage, fuel) {
        super(mileage, fuel);
        this.mileage = mileage;
        this.fuel = fuel;
    }
    drive(value) {
        if (this.fuel <= 0) {
            console.log('Your have to go to gaz station. Your fuel = 0');
        }
        if (!value) {
            return console.log("Insert a number");
        }
        else {
            this.mileage += value;
            this.fuel -= value;
            return this.mileage;
        }
    }
    refuel(fuelValue) {
        if (!fuelValue) {
            return console.log("Insert a number");
        }
        else {
            return this.fuel += fuelValue;
        }
    }
    //Task 3
    get carValues() {
        return [this.mileage, this.fuel];
    }
}
let newCar = new Honda(20, 100);
