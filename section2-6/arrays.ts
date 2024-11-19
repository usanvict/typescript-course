const carMakers: string[] = ["ford", "toyota", "chevy"];

const dates = [new Date(), new Date()];

const carsByMike = [["ford150"], ["corolla"], ["camaro"]];
const carsByMike2: string[][] = [];

// Help with inference when extracting values
const car = carMakers[2];
const myCar = carMakers.pop();

// prevent incompatible values
// carMakers.push(2);

// help with 'map'
carMakers.map((car: string): string => {
	return car.toUpperCase();
});

// Flexible types
const importantDates: (string | Date)[] = [new Date(), "2030-10-10"];
importantDates.push("2030-10-12");
importantDates.push(new Date());
