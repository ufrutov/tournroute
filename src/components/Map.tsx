import React from "react";

import OlMap from "ol/Map";
import OlView from "ol/View";
import Feature from "ol/Feature";
import OlGeomPoint from "ol/geom/Point";
import OlLayerTile from "ol/layer/Tile";
import OlLayerVector from "ol/layer/Vector";
import OlSourceOSM from "ol/source/OSM";
import OlSourceVector from "ol/source/Vector";
import OlStyleStyle from "ol/style/Style";
import OlStyleIcon from "ol/style/Icon";
import { transform, fromLonLat } from "ol/proj";

import { Coordinates, Place } from "@util/Interface";

interface Props {
	center: Coordinates;
	zoom?: number;
	markers?: Place[];
	onMarkerClick?: (arg0: Place) => void;
}

const Map = ({ center, zoom = 12, markers = [], onMarkerClick }: Props) => {
	const [mapEl, setMapEl] = React.useState(null);

	const fillMarkers = () => {
		var layer = new OlLayerVector({
			source: new OlSourceVector({
				features: markers.map(
					(place) =>
						new Feature({
							geometry: new OlGeomPoint(
								transform([place.coordinates.lon, place.coordinates.lat], "EPSG:4326", "EPSG:3857")
							),
							name: place.name,
							data: place,
						})
				),
			}),
			style: new OlStyleStyle({
				image: new OlStyleIcon({
					anchor: [0.5, 46],
					anchorXUnits: "fraction",
					anchorYUnits: "pixels",
					src: "https://openlayers.org/en/latest/examples/data/icon.png",
				}),
			}),
		});

		// @ts-ignore
		mapEl.addLayer(layer);
	};

	React.useEffect(() => {
		if (mapEl == null) {
			const map = new OlMap({
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

			map.on("click", function (evt) {
				const feature = map.forEachFeatureAtPixel(evt.pixel, function (feature) {
					return feature;
				});

				if (onMarkerClick) {
					// @ts-ignore
					const { data } = feature?.getProperties();
					onMarkerClick!(data as Place);
				}
			});

			// @ts-ignore
			setMapEl(map);
		}
	}, []);

	React.useEffect(() => {
		if (markers.length > 0 && mapEl !== null) {
			fillMarkers();
		}
	}, [mapEl, markers]);

	return <div id="map" />;
};

export default Map;
