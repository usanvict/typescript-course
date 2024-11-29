import type { User } from "./User";
import type { Company } from "./Company";

// const { AdvancedMarkerElement } = (await google.maps.importLibrary(
// 	"marker",
// )) as google.maps.MarkerLibrary;

// Instruction to every other class
// on how they can be an argument to "addMarker"
interface Mappable {
	location: {
		lat: number;
		lng: number;
	};
}

export class CustomMap {
	private googleMap: google.maps.Map;

	constructor(divId: string) {
		const mapElement = document.getElementById(divId);
		if (mapElement == null) {
			throw new Error("Element doesn't exist");
		}
		this.googleMap = new google.maps.Map(mapElement, {
			zoom: 1,
			center: {
				lat: 0,
				lng: 0,
			},
		});
	}

	addMarker(mappable: Mappable): void {
		new google.maps.Marker({
			map: this.googleMap,
			position: {
				lat: mappable.location.lat,
				lng: mappable.location.lng,
			},
		});
	}

	// addCompanyMarker(company: Company): void {
	// 	new google.maps.Marker({
	// 		map: this.googleMap,
	// 		position: {
	// 			lat: company.location.lat,
	// 			lng: company.location.lng,
	// 		},
	// 	});
	// }
}
