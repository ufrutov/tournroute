import { Document } from "@contentful/rich-text-types";

export interface Country {
	name: string;
	sys: Sys;
}

export interface City {
	name: string;
	country: Country;
	coordinates: Coordinates;
	description: RichText;
	galleryCollection: GalleryCollection;
	sys: Sys;
}

export interface Place {
	name: string;
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
	id: string;
}

interface RichText {
	json: Document;
}

interface GalleryCollection {
	items: { url: string }[];
}
