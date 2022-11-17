export default class Util {
	static filter(data: Array<any>, field: String, value: String) {
		// @ts-ignore
		return data.filter((record) => record[field] === value);
	}

	static getById(data: Array<any>, id: String) {
		const filtered = this.filter(data, "id", id);
		return filtered.length > 0 ? filtered[0] : {};
	}

	static parseCoors(value: String) {
		return value
			.split(",")
			.map((v) => parseFloat(v))
			.reverse();
	}
}
