const drink = {
	color: "brown",
	carbonated: true,
	sugar: 40,
};

// type alias
type Drink = [string, boolean, number];

const pepsi: Drink = ["brown", true, 40];
// pepsi[0] = 40; will not work after defining the tuple

const sprite: Drink = ["white", true, 50];
const tea: Drink = ["black", false, 0];

const carSpecs: [number, number] = [400, 3354];

const diffCarSpecs = {
	horsepower: 400,
	weight: 3354,
};
