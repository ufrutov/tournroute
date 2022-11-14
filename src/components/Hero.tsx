import React from "react";
import Link from "next/link";
import Image from "next/image";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import { City } from "@/util/Interface";
import { SimpleCard, SimpleCardText } from "@/styled/SimpleCard";

interface Props {
	city: City;
	reverse?: boolean;
}

function Hero({ city, reverse }: Props) {
	const order = reverse ? "order-md-first" : "order-md-last";

	return (
		<Link href={`city?id=${city.sys.id}`}>
			<div className="row g-4 my-5" style={{ cursor: "pointer" }}>
				<SimpleCard className={`col-md-6 col-12 ${order}`} minHeight={[300, 500]}>
					<div>
						<SimpleCardText className="p-4">
							<h2>{city.name}</h2>
							<p>
								<strong>{city.country.name}</strong>
							</p>
						</SimpleCardText>
						<Image
							alt={city.name}
							src={city.galleryCollection.items[0].url}
							loader={({ src }) => src}
							layout="fill"
						/>
					</div>
				</SimpleCard>
				<div className="col-md-6 col-12">
					<div className="row justify-content-center h-100" style={{ flexDirection: "column" }}>
						<h1 className="display-4">
							{city.name} <small className="lead">{city.country.name}</small>
						</h1>
						<p className="lead">{documentToReactComponents(city.description.json)}</p>
					</div>
				</div>
			</div>
		</Link>
	);
}

export default Hero;
