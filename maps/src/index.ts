/// <reference types="@types/google.maps" />

// import { User } from "./user";
// import { Company } from "./Company";

const mapElement = document.getElementById("map");
if (mapElement == null) {
	throw new Error("Element doesn't exist");
}
new google.maps.Map(mapElement, {
	zoom: 1,
	center: {
		lat: 0,
		lng: 0,
	},
});
