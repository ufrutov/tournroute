import React from "react";

import OlMap from "ol/Map";
import OlView from "ol/View";
import OlLayerTile from "ol/layer/Tile";
import OlSourceOSM from "ol/source/OSM";
import { transform } from "ol/proj";

import { Coordinates } from "@util/Interface";

interface Props {
	center: Coordinates;
	zoom?: number;
}

const Map = ({ center, zoom = 12 }: Props) => {
	React.useEffect(() => {
		new OlMap({
			target: "map",
			controls: [],
			layers: [
				new OlLayerTile({
					source: new OlSourceOSM(),
				}),
			],
			view: new OlView({
				center: transform([center.lon, center.lat], "EPSG:4326", "EPSG:3857"),
				zoom: zoom,
			}),
		});
	}, []);

	return <div id="map" />;
};

export default Map;
