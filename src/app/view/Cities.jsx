import React from "react";
import DataManager from "../util/DataManager";

export default function Cities(props) {
	const { select, list = [] } = props;
	const [items, setItems] = React.useState(list);

	React.useEffect(() => {
		if (list.length === 0) {
			DataManager.getData("city").then((data) => {
				setItems(data.items);
			});
		}
	}, [list]);

	return (
		<div className="row mt-3">
			{items.map((c, index) => (
				<div
					className="col-12 col-md-6 col-lg-4 mt-3"
					key={c.sys.id}
					onClick={() => {
						try {
							select(c, c.sys.id);
						} catch (e) {
							console.error("[E] Cities: unable to select city", e);
						}
					}}
				>
					<div className="card bg-success text-white ux-cursor-pointer">
						<div className="position-relative">
							{c.galleryCollection ? (
								<img
									src={c.galleryCollection.items[0].url}
									className="card-img-top ux-card-img"
									alt={c.galleryCollection.items[0].title}
								/>
							) : (
								<div style={{ height: "150px" }} />
							)}
							<div className="card-body ux-card-body py-2 px-3 ">
								{c.country && (
									<h6 className="m-0 font-weight-bolder">
										<small>{c.country.name}</small>
									</h6>
								)}
								<h4 className="m-0 font-weight-bolder">{c.name}</h4>
							</div>
						</div>
						<div className="card-footer py-2 px-3 bg-success d-flex align-items-center justify-content-between">
							<span className="small stretched-link">View Places</span>
							<div className="small">
								<i className="fa fa-arrow-circle-right"></i>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}
