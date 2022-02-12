import React from "react";
import DataManager from "../util/DataManager";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function Place(props) {
	const { place, index, select } = props;

	return (
		<div
			className="col-6 mt-3"
			key={`place-item-${index}`}
			onClick={() => {
				try {
					DataManager.getEntry("place", place.sys.id).then((data) => {
						console.log(data);
					});
				} catch (e) {
					console.error("[E] Places: unable to load place data", e);
				}

				try {
					select(place, place.sys.id);
				} catch (e) {
					console.error("[E] Places: unable to select place", e);
				}
			}}
		>
			<div className="card ux-place-card ux-cursor-pointer">
				<div className="position-relative">
					{place.galleryCollection.items.length > 0 ? (
						<img
							src={place.galleryCollection.items[0].url}
							className="card-img-top ux-card-img"
							alt={place.galleryCollection.items[0].title}
							style={{ height: "250px" }}
						/>
					) : (
						<div className="card-img-top ux-bg-gradient" style={{ height: "250px" }} />
					)}
					<div className="card-body ux-card-body top text-white py-2 px-3 ">
						<h5 className="m-0 font-weight-bolder">{place.name}</h5>
						{place.city && (
							<h6 className="m-0 font-weight-bolder">
								<small>
									{place.city.name}, {place.city.country.name}
								</small>
							</h6>
						)}
					</div>
					{place.schedule && (
						<div className="card-body ux-card-body text-white py-2 px-3 place-schedule">
							<small>{documentToReactComponents(place.schedule.json)}</small>
						</div>
					)}
				</div>
				<div className="card-body place-description">
					{documentToReactComponents(place.description.json)}
				</div>
			</div>
		</div>
	);
}
