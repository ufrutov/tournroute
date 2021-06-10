import { contentful } from "../config/contentful";

export default class DataManager {
	static async getData(key = "country") {
		let query;
		let collection;

		const cityQuery = `{ cityCollection { items { name, country { name, sys { id } }, coordinates { lat, lon }, description { json }, sys { id } } } }`;
		const placeQuery = `{ placeCollection(limit: 1000) { items { name, description { json }, sys { id }, city { name, sys { id }, country { name, sys { id } } }, coordinates { lat, lon } } } }`;
		const cityLinkedQuery = `{ cityCollection { items { name, coordinates { lat, lon }, description { json }, sys { id } } } }`;
		const countryQuery = `{ countryCollection { items { name, linkedFrom ${cityLinkedQuery}, sys { id } } } }`;

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
}
