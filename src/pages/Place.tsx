import React from "react";
import { Link, useParams } from "react-router-dom";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import DataManager from "@util/DataManager";
import { Place } from "@util/Interface";
import Footer from "@components/Footer";
import Header from "@components/Header";
import Map from "@components/Map";
import { Container, PlaceDescription } from "@styled/PageContent";
import { Banner } from "@styled/Banner";

const Home = () => {
	const [place, setPlace] = React.useState<Place>();

	const { id } = useParams();

	React.useEffect(() => {
		if (id) {
			DataManager.getEntry("place", id).then((data) => {
				setPlace(data);
			});
		}
	}, []);

	return (
		<>
			<Header />

			<main>
				<Banner>
					{place && <img alt={place.name} src={place.galleryCollection.items[0].url} />}
				</Banner>

				<Container className="container py-5" style={{ marginTop: "-10vh" }}>
					<div className="row g-4">
						<div className="col-md-8 col-12">
							{place && (
								<PlaceDescription className="p-4">
									<h1 className="display-4">{place.name}</h1>
									<p className="lead">
										<Link to={`/city/${place.city.sys.id}`}>
											<a className="navbar-brand">
												{place.city.name}, {place.city.country.name}
											</a>
										</Link>
									</p>
									<div className="d-none d-md-block">
										{documentToReactComponents(place.description.json)}
									</div>
								</PlaceDescription>
							)}
						</div>
						<div className="col-md-4 col-12">
							{place && (
								<PlaceDescription className="mb-4" style={{ minHeight: "400px" }}>
									<Map center={place.coordinates} zoom={15} />
								</PlaceDescription>
							)}
							{place && (
								<PlaceDescription className="p-4 mb-4">
									<div className="d-block d-md-none mb-4">
										{documentToReactComponents(place.description.json)}
									</div>
									{place.schedule && documentToReactComponents(place.schedule.json)}
								</PlaceDescription>
							)}
							{place && (
								<PlaceDescription className="mb-4" style={{ minHeight: "300px" }}>
									<img
										alt={place.name}
										src={place.galleryCollection.items[0].url}
										className="img-fluid"
									/>
								</PlaceDescription>
							)}
						</div>
					</div>
				</Container>
			</main>

			<Footer />
		</>
	);
};

export default Home;
