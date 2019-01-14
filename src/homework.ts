//Task 1
abstract class Car {


	constructor(protected mileage: number, protected fuel: number) {
	}

	abstract drive(value: number): any;

	abstract refuel(fuelValue: number): any;
}

//Task 2
class Honda extends Car {
	constructor(protected mileage: number, protected fuel: number) {
		super(mileage, fuel);
	}

	drive(value: number): any {
		if (this.fuel <= 0) {
			console.log('Your have to go to gaz station. Your fuel = 0');
		}

		if (!value) {
			return console.log("Insert a number");
		} else {
			this.mileage += value;
			this.fuel -= value;

			return this.mileage;
		}


	}

	refuel(fuelValue: number): any {
		if (!fuelValue) {
			return console.log("Insert a number");
		} else {
			return this.fuel += fuelValue;

		}
	}

	//Task 3
	public get carValues(): any {
		return [this.mileage, this.fuel];
	}
}

let newCar = new Honda(20, 100);
