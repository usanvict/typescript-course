import { faker } from "@faker-js/faker";
import type { Mappable } from "./CustomMap";

export class User implements Mappable {
	name: string;
	location: {
		lat: number;
		lng: number;
	};

	constructor() {
		this.name = faker.name.firstName();
		this.location = {
			lat: Number.parseFloat(faker.address.latitude()),
			lng: Number.parseFloat(faker.address.longitude()),
		};
	}

	markerContent(): string {
		return `User name is ${this.name}`;
	}
}
