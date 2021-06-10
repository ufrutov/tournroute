import React from "react";
import DataManager from "../util/DataManager";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function Routes(props) {
	const { select, selectPlace, list = [], city, country } = props;
	const [items, setItems] = React.useState(list);

	React.useEffect(() => {
		if (list.length === 0)
			DataManager.getData("route").then((data) => {
				if (city.length > 0 || country.length > 0) {
					const filtered = data.filter((place) => {
						if (city.length > 0) return place.city.sys.id === city;
						if (country.length > 0) return place.city.country.sys.id === country;
						return false;
					});
					setItems(filtered);
				} else {
					setItems(data);
				}
			});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="row mt-3">
			{items.map((r) => {
				return (
					<div className="col-12 mt-3" key={r.sys.id}>
						<div
							className="card ux-cursor-pointer"
							onClick={() => {
								try {
									const points = r.placesCollection.items.map((place) => [
										place.coordinates.lon,
										place.coordinates.lat,
									]);
									select(r, points, r.sys.id);
								} catch (e) {
									console.error("[E] Routes: unable to select route", e);
								}
							}}
						>
							<div className="card-header bg-primary text-white">
								<div className="d-flex align-items-end justify-content-between">
									<h5 className="m-0 font-weight-bolder">{r.name}</h5>
									<h6 className="m-0 font-weight-bolder">
										{r.city.name}, {r.city.country.name}
									</h6>
								</div>
							</div>
							<div className="card-body">
								{r.description && (
									<div className="route-description">
										{documentToReactComponents(r.description.json)}
									</div>
								)}
								<div className="row">
									{r.placesCollection.items.map((place, index) => {
										return (
											<div
												className="ux-route-item col-12 py-2"
												key={place.sys.id}
												onClick={(e) => {
													e.stopPropagation();

													try {
														selectPlace(place, place.sys.id);
													} catch (e) {
														console.error("[E] Routes: unable to select route place", e);
													}
													// this._map.removeLayer("points");
													// this._map.setPoints(points);
													// this._map.setRoute(points);
													// this._map.setCoors(Util.parseCoors(place.coordinates), 15);
												}}
											>
												<div className="d-flex align-items-center">
													<div className="mr-3">
														<i className="fa fa-circle text-primary"></i>
													</div>
													<div className="card ux-place-card ux-cursor-pointer">
														<div className="card-header">
															<h5 className="m-0 font-weight-bolder">{place.name}</h5>
														</div>
														{place.schedule && (
															<div className="card-body pt-3 pb-2 place-schedule">
																{documentToReactComponents(place.schedule.json)}
															</div>
														)}
														<div className="card-body place-description small">
															{documentToReactComponents(place.description.json)}
														</div>
													</div>
												</div>
											</div>
										);
									})}
								</div>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}
