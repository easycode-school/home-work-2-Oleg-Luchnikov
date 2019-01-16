//Task 1
abstract class Car {
	protected mileage: number;
	protected fuel: number;

	abstract drive(value: number): any;

	abstract refuel(fuelValue: number): any;
}

//Task 2
class Honda extends Car {
	protected mileage: number;
	protected fuel: number;
	constructor(mileage: number, fuel: number) {
		super();
		this.mileage = mileage;
		this.fuel = fuel;
	}
	/**
	 * 
	 * @param value - количество километров
	 * Принимает количество километров и обновляет свойства mileage и fuel
	 */
	drive(value: number): any {
		if (!value) return console.log("Insert a number");

		this.mileage += value;
		this.fuel -= value;

		if (this.fuel <= 0)	console.log('Your have to go to gaz station. Your fuel = 0');

		return this.mileage;
	}
	/**
	 * 
	 * @param fuelValue - количество топлива
	 * Принимает количество топлива и обновляет его
	 */
	refuel(fuelValue: number): any {
		if (!fuelValue) return console.log("Insert a number");
		return this.fuel += fuelValue;
	}

	//Task 3
	public get carMileage(): number {
		return this.mileage;
	}

	public get carFuel(): number {
		return this.fuel;
	}
}

let newCar = new Honda(20, 100);
