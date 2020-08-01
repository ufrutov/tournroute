export default class Util {
	static filter(data, field, value) {
		return data.filter((record) => record[field] === value);
	}

	static getById(data, id) {
		const filtered = this.filter(data, "id", id);
		return filtered.length > 0 ? filtered[0] : {};
	}

	static parseCoors(value) {
		return value.split(",").map((v) => parseFloat(v)).reverse();
	}
}
