import { faker } from "@faker-js/faker";
import type { Mappable } from "./CustomMap";

export class Company implements Mappable {
	companyName: string;
	catchPhrase: string;
	location: {
		lat: number;
		lng: number;
	};

	constructor() {
		this.companyName = faker.company.name();
		this.catchPhrase = faker.company.catchPhrase();
		this.location = {
			lat: Number.parseFloat(faker.address.latitude()),
			lng: Number.parseFloat(faker.address.longitude()),
		};
	}

	markerContent(): string {
		return `
		<div>
			<h1>Company name is ${this.companyName}</h1>
			<h3>Catch phrase is ${this.catchPhrase}</h3>
		</div>
		`;
	}
}
