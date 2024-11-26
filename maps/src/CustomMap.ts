import type { User } from "./User";
import type { Company } from "./Company";

// const { AdvancedMarkerElement } = (await google.maps.importLibrary(
// 	"marker",
// )) as google.maps.MarkerLibrary;

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

	addUserMarker(user: User): void {
		new google.maps.Marker({
			map: this.googleMap,
			position: {
				lat: user.location.lat,
				lng: user.location.lng,
			},
		});
	}
	addCompanyMarker(company: Company): void {}
}
