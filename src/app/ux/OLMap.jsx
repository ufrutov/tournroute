/* eslint-disable */
import React from "react";
import { Map, View } from "ol";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import { GeoJSON, XYZ } from "ol/format";
import { toLonLat, fromLonLat } from "ol/proj";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
import {
	Vector as VectorSource,
	OSM as OSMSource,
	XYZ as XYZSource,
	TileWMS as TileWMSSource,
} from "ol/source";
import { Select as SelectInteraction, defaults as DefaultInteractions } from "ol/interaction";
import { defaults as DefaultControls } from "ol/control";
import {
	Icon,
	Style,
	Fill as FillStyle,
	RegularShape as RegularShapeStyle,
	Stroke as StrokeStyle,
} from "ol/style";

import { Projection, get as getProjection } from "ol/proj";

class OLMap extends React.Component {
	_map = null;
	url_osrm_nearest = "//router.project-osrm.org/nearest/v1/foot/";
	url_osrm_route = "//router.project-osrm.org/route/v1/foot/";
	icon_url = "https://openlayers.org/en/v4.6.5/examples/data/icon.png";

	constructor(props) {
		super(props);

		this.state = {
			height: 300,
			center: [10.6, 49.6],
		};

		this.getBounds = this.getBounds.bind(this);
		this.updateDimensions = this.updateDimensions.bind(this);
	}

	updateDimensions() {
		this.setState({ height: this.getBounds().height }, () => {
			try {
				this._map.setSize([this.getBounds().width, this.getBounds().height]);
			} catch (e) {
				// Map element ref is not ready
			}
		});
	}

	getBounds() {
		let h = 300;
		let w = 400;

		try {
			w = this._mapEl.clientWidth;
			h = (w * 3) / 4;
		} catch (e) {
			// Map element ref is not ready
		}

		return { width: w, height: h };
	}

	setCoors(center, zoom = null) {
		this._map.getView().setCenter(fromLonLat(center));
		if (zoom) {
			this._map.getView().setZoom(zoom);
		}
	}

	setPoints(points) {
		this._map.addLayer(
			new VectorLayer({
				id: "points",
				source: new VectorSource({
					features: points.reverse().map((point) => {
						const marker = new Feature({
							geometry: new Point(fromLonLat(point)),
							name: "New Marker",
						});

						const iconStyle = new Style({
							image: new Icon({
								anchor: [0.5, 46],
								anchorXUnits: "fraction",
								anchorYUnits: "pixels",
								src: this.icon_url,
							}),
						});

						marker.setStyle(iconStyle);

						return marker;
					}),
				}),
			})
		);
	}

	setRoute(points) {
		const route = points.map((p) => toLonLat(p).join()).join(";");
		console.log("[setRoute]", route);
		fetch(this.url_osrm_route + route)
			.then((r) => r.json())
			.then((response) => {
				if (response.code !== "Ok") {
					console.warn(`[E][OLMap] Error on ${this.url_osrm_route + route} request.`);
					return;
				}
				console.log(response);
			});
	}

	removeLayer(id) {
		this._map.getLayers().forEach((l) => {
			try {
				if (l.get("id") === id) {
					this._map.removeLayer(l);
				}
			} catch (e) {
				// Map layer is unable to remove
			}
		});
	}

	componentDidMount() {
		window.addEventListener("resize", this.updateDimensions);
		this.updateDimensions();

		// Create an Openlayer Map instance with two tile layers
		this._map = new Map({
			//  Display the map in the div with the id of map
			target: "map",
			layers: [
				new TileLayer({
					id: "map",
					source: new XYZSource({
						url: "https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png",
						projection: "EPSG:3857",
					}),
				}),
			],
			controls: DefaultControls({
				rotate: false,
			}),
			// Render the tile layers in a map view with a Mercator projection
			view: new View({
				projection: "EPSG:3857",
				center: fromLonLat(this.state.center),
				zoom: 4,
			}),
		});
	}
	componentWillUnmount() {
		window.removeEventListener("resize", this.updateDimensions);
	}

	render() {
		const style = {
			width: "100%",
			height: this.state.height,
			backgroundColor: "#cccccc",
		};

		return (
			<div>
				<div
					id="map"
					style={style}
					ref={(ref) => {
						this._mapEl = ref;
					}}
				></div>
			</div>
		);
	}
}

export default OLMap;
