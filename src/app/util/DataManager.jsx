import { contentful } from "../config/contentful";

export default class DataManager {
	static async getData(key = "country", skip = 0, filter) {
		const limit = 32;
		let query;
		let where = "";

		// [TODO]
		// Format
		// Filter places by city
		// Filter cities by country

		if (filter && filter.hasOwnProperty("country")) {
			where = `where: { country: { sys: { id: "${filter.country}" } } }`;
		}

		if (filter && filter.hasOwnProperty("city")) {
			where = `where: { city: { sys: { id: "${filter.city}" } } }`;
		}

		const cityQuery = `{ ${key}Collection(limit: ${limit} skip: ${skip} ${where}) { total, items { name, country { name, sys { id } }, galleryCollection { items { title, url } }, coordinates { lat, lon }, description { json }, sys { id } } } }`;
		const placeQuery = `{ ${key}Collection(limit: ${limit} skip: ${skip} ${where}) { total, items { name, schedule { json }, description { json }, galleryCollection { items { title, url } }, sys { id }, city { name, sys { id }, country { name, sys { id } } }, coordinates { lat, lon } } } }`;
		const countryQuery = `{ ${key}Collection { items { name, galleryCollection { total, items { title, url, sys { id } } }, sys { id } } } }`;
		const routeQuery = `{ ${key}Collection(limit: ${limit} skip: ${skip} ${where}) { total, items { name, description { json }, placesCollection { items { name, schedule { json }, description { json }, sys { id }, coordinates { lat, lon } } }, sys { id }, city { name, coordinates { lat, lon }, sys { id }, country { name, sys { id } } } } } }`;

		switch (key) {
			case "country":
				query = countryQuery;
				break;
			case "city":
				query = cityQuery;
				break;
			case "place":
				query = placeQuery;
				break;
			case "route":
				query = routeQuery;
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
		return output.data[`${key}Collection`];
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

	static async getAsset(id) {
		if (id) {
			// [TODO]
			// Switch query for every collection

			const query = `{ asset(id: "${id}") { title, description, url } }`;
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

			return output.data;
		} else {
			return null;
		}
	}
}
