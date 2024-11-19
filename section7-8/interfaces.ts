interface Reportable {
	summary(): string;
}

interface Vehicle extends Reportable {
	name: string;
	year: number;
	broken: boolean;
}

interface Drink extends Reportable {
	color: string;
	carbonated: boolean;
	sugarContent: number;
}

const someDrink: Drink = {
	color: "brown",
	carbonated: true,
	sugarContent: 40,
	summary(): string {
		return `Color is ${this.color}`;
	},
};

const oldCivic: Vehicle = {
	name: "civic",
	year: 2000,
	broken: true,
	summary(): string {
		return `Name: ${this.name}`;
	},
};

const printSummary = (item: Reportable): void => {
	console.log(item.summary());
};

printSummary(oldCivic);
printSummary(someDrink);
