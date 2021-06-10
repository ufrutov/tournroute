import React from "react";
import DataManager from "../util/DataManager";

export default function Countries(props) {
	const { select } = props;
	const [items, setItems] = React.useState([]);

	React.useEffect(() => {
		DataManager.getData("country").then((data) => {
			setItems(data);
		});
	}, []);

	return (
		<div className="row mt-3">
			{items.map((c, index) => (
				<div
					className="col-12 col-md-6 col-lg-4 mt-3"
					key={c.sys.id}
					onClick={() => {
						try {
							select(c, c.linkedFrom.cityCollection.items, c.sys.id);
						} catch (e) {
							console.error("[E] Countries: unable to select country", e);
						}
					}}
				>
					<div className="card bg-primary text-white ux-cursor-pointer">
						<div className="card-body py-3 px-3 ">
							<h4 className="m-0 font-weight-bolder">{c.name}</h4>
							<h6 className="m-0 font-weight-bolder">
								{c.linkedFrom.cityCollection.items.map((ct, ctIndex) => (
									<small className="mr-2" key={`country-city-${ct.sys.id}`}>
										{ct.name}
									</small>
								))}
							</h6>
						</div>
						<div className="card-footer py-2 px-3 bg-primary d-flex align-items-center justify-content-between">
							<span className="small stretched-link">View Cities</span>
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
