import React from "react";
import { Link } from "react-router-dom";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import { City } from "@util/Interface";
import { SimpleCard, SimpleCardText } from "@styled/SimpleCard";

interface Props {
	city: City;
	reverse?: boolean;
}

function Hero({ city, reverse }: Props) {
	const order = reverse ? "order-md-first" : "order-md-last";

	return (
		<Link to={`/city/${city.sys.id}`}>
			<div className="row g-4 my-5" style={{ cursor: "pointer" }}>
				<div className={`col-md-6 col-12 ${order}`}>
					<SimpleCard minHeight={[300, 500]}>
						<SimpleCardText className="p-4">
							<h2>{city.name}</h2>
							<p>
								<strong>{city.country.name}</strong>
							</p>
						</SimpleCardText>
						<img alt={city.name} src={city.galleryCollection.items[0].url} />
					</SimpleCard>
				</div>
				<div className="col-md-6 col-12">
					<div className="row justify-content-center h-100" style={{ flexDirection: "column" }}>
						<h1 className="display-4 text-dark">
							{city.name} <small className="lead">{city.country.name}</small>
						</h1>
						<div className="lead text-dark">{documentToReactComponents(city.description.json)}</div>
					</div>
				</div>
			</div>
		</Link>
	);
}

export default Hero;
