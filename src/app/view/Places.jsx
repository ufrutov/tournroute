import React from "react";
import DataManager from "../util/DataManager";
import Place from "./PlaceItem";

export default function Places(props) {
	const { select, list = [], city, country } = props;
	const [items, setItems] = React.useState(list);
	const [total, setTotal] = React.useState(list.length);
	const [filter, setFilter] = React.useState({});
	const [more, setMore] = React.useState(list.length);

	const loadMore = () => {
		DataManager.getData("place", items.length, filter).then((data) => {
			setItems([...items, ...data.items]);
			setMore(data.total - items.length);
		});
	};

	React.useEffect(() => {
		let config = {};

		if (city) {
			config.city = city;
		}

		if (country) {
			config.country = country;
		}

		if (list.length === 0) {
			DataManager.getData("place", 0, config).then((data) => {
				setTotal(data.total);
				setItems(data.items);
				setFilter(config);
			});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	React.useEffect(() => {
		setMore(total - items.length);
	}, [total, items.length]);

	return (
		<>
			<div className="row mt-3">
				{items.map((p, index) => {
					return <Place select={select} place={p} index={index} key={`place-${index}`} />;
				})}
			</div>
			{more > 0 && (
				<div className="mt-4 text-center">
					<button className="btn btn-link btn-outline" onClick={loadMore}>
						Load more ({more})
					</button>
				</div>
			)}
		</>
	);
}
