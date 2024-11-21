// Uncomment to see public, private and protected methods

// class Vehicle {
// 	public drive(): void {
// 		console.log("chugga chugga");
// 	}

// 	protected honk(): void {
// 		console.log("beep");
// 	}
// }

// class Car extends Vehicle {
// 	private drive(): void {
// 		console.log("wroom");
// 	}

// 	startDrivingProcess(): void {
// 		this.drive();
// 		this.honk();
// 	}
// }

// const vehicle = new Vehicle();
// vehicle.drive();
// vehicle.honk();

// const car = new Car();
// car.startDrivingProcess();
// car.honk();

class Vehicle {
	// color: string;

	// constructor(color: string) {
	// 	this.color = color;
	// }

	constructor(public color: string) {}

	honk(): void {
		console.log("beep");
	}
}

class Car extends Vehicle {
	constructor(
		public wheels: number,
		color: string,
	) {
		super(color);
	}

	drive(): void {
		console.log("wroom");
	}

	startDrivingProcess(): void {
		this.drive();
		this.honk();
	}
}

const vehicle = new Vehicle("orange");
console.log(vehicle.color);

const car = new Car(5, "red");
console.log(`${car.color} ${car.wheels}`);