import React from "react";
import DataManager from "../util/DataManager";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function Places(props) {
	const { select, list = [], city, country } = props;
	const [items, setItems] = React.useState(list);

	React.useEffect(() => {
		if (list.length === 0)
			DataManager.getData("place").then((data) => {
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
			{items.map((p, index) => {
				return (
					<div
						className="col-12 mt-3"
						key={`place-${index}`}
						onClick={() => {
							try {
								select(p, p.sys.id);
							} catch (e) {
								console.error("[E] Places: unable to select place", e);
							}
						}}
					>
						<div className="card ux-place-card ux-cursor-pointer">
							<div className="card-header">
								<div className="d-flex align-items-end justify-content-between">
									<h5 className="m-0 font-weight-bolder">{p.name}</h5>
									<h6 className="m-0 font-weight-bolder">
										{p.city.name}, {p.city.country.name}
									</h6>
								</div>
							</div>
							{p.schedule && (
								<div className="card-body pt-3 pb-2 place-schedule">
									{documentToReactComponents(p.schedule.json)}
								</div>
							)}
							<div className="card-body place-description">
								{documentToReactComponents(p.description.json)}
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}
