//Task 1
class Car {
}
//Task 2
class Honda extends Car {
    constructor(mileage, fuel) {
        super();
        this.mileage = mileage;
        this.fuel = fuel;
    }
    /**
     *
     * @param value - количество километров
     * Принимает количество километров и обновляет свойства mileage и fuel
     */
    drive(value) {
        if (!value)
            return console.log("Insert a number");
        this.mileage += value;
        this.fuel -= value;
        if (this.fuel <= 0)
            console.log('Your have to go to gaz station. Your fuel = 0');
        return this.mileage;
    }
    /**
     *
     * @param fuelValue - количество топлива
     * Принимает количество топлива и обновляет его
     */
    refuel(fuelValue) {
        if (!fuelValue)
            return console.log("Insert a number");
        return this.fuel += fuelValue;
    }
    //Task 3
    get carMileage() {
        return this.mileage;
    }
    get carFuel() {
        return this.fuel;
    }
}
let newCar = new Honda(20, 100);
