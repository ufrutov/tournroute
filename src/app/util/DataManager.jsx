import { contentful } from "../config/contentful";

export default class DataManager {
	static async getData(key = "country") {
		let query;
		let collection;

		// [TODO]
		// Format
		// Filter places by city
		// Filter cities by country

		const cityQuery = `{ cityCollection { items { name, country { name, sys { id } }, galleryCollection { items { title, url } }, coordinates { lat, lon }, description { json }, sys { id } } } }`;
		const placeQuery = `{ placeCollection(limit: 1000) { items { name, schedule { json }, description { json }, sys { id }, city { name, sys { id }, country { name, sys { id } } }, coordinates { lat, lon } } } }`;
		// const cityLinkedQuery = `{ cityCollection { items { name, coordinates { lat, lon }, description { json }, sys { id } } } }`;
		// const countryQuery = `{ countryCollection { items { name, galleryCollection { items { title, url } }, linkedFrom ${cityLinkedQuery}, sys { id } } } }`;
		const countryQuery = `{ countryCollection { items { name, galleryCollection { items { title, url } }, sys { id } } } }`;
		const routeQuery = `{ routeCollection { items { name, description { json }, placesCollection { items { name, schedule { json }, description { json }, sys { id }, coordinates { lat, lon } } }, sys { id }, city { name, coordinates { lat, lon }, sys { id }, country { name, sys { id } } } } } }`;

		switch (key) {
			case "country":
				query = countryQuery;
				collection = "countryCollection";
				break;
			case "city":
				query = cityQuery;
				collection = "cityCollection";
				break;
			case "place":
				query = placeQuery;
				collection = "placeCollection";
				break;
			case "route":
				query = routeQuery;
				collection = "routeCollection";
				break;
			default:
		}

		if (query.length === 0) return [];

		const response = await window.fetch(
			`https://graphql.contentful.com/content/v1/spaces/${contentful.spaceID}/`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${contentful.deliverTOKEN}`,
				},
				body: JSON.stringify({ query }),
			}
		);

		const output = await response.json();
		return output.data[collection].items;
	}

	static async getCollection(collection, id) {
		if (id) {
			// [TODO]
			// Switch query for every collection

			const query = `{ ${collection}Collection(where: { country: { sys: { id: "${id}" } } } ) { items { name, country { name, sys { id } }, galleryCollection { items { title, url } }, coordinates { lat, lon }, description { json }, sys { id } } } }`;
			const response = await window.fetch(
				`https://graphql.contentful.com/content/v1/spaces/${contentful.spaceID}/`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${contentful.deliverTOKEN}`,
					},
					body: JSON.stringify({ query }),
				}
			);

			const output = await response.json();
			return output.data[`${collection}Collection`];
		} else {
			return null;
		}
	}

	static async getEntry(collection, id) {
		if (id) {
			// [TODO]
			// Switch query for every collection

			const query = `{ ${collection}(id: "${id}") { name } }`;
			const response = await window.fetch(
				`https://graphql.contentful.com/content/v1/spaces/${contentful.spaceID}/`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${contentful.deliverTOKEN}`,
					},
					body: JSON.stringify({ query }),
				}
			);

			const output = await response.json();

			return output.data[collection];
		} else {
			return null;
		}
	}
}
