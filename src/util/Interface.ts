export interface Country {
	name: String;
	sys: Sys;
}

export interface City {
	name: String;
	country: Country;
	galleryCollection: GalleryCollection;
	sys: Sys;
}

export interface Place {
	name: String;
	city: City;
	coordinates: Coordinates;
	description: RichText;
	schedule: RichText;
	galleryCollection: GalleryCollection;
	sys: Sys;
}

export interface Coordinates {
	lat: number;
	lon: number;
}

interface Sys {
	id: String;
}

interface RichText {
	json: Document;
}

interface GalleryCollection {
	items: { url: string }[];
}
