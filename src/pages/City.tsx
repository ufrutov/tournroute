import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import DataManager from "@util/DataManager";
import { City, Place } from "@util/Interface";
import { SimpleCard, SimpleCardEmptyText, SimpleCardText } from "@styled/SimpleCard";
import Footer from "@components/Footer";
import Header from "@components/Header";
import Map from "@components/Map";
import { Container, PlaceDescription } from "@styled/PageContent";
import { Banner } from "@styled/Banner";
import { Empty } from "@styled/Empty";

const Home = () => {
	const navigate = useNavigate();

	const [city, setCity] = React.useState<City>();
	const [places, setPlaces] = React.useState<Place[]>([]);
	const [ready, setReady] = React.useState(false);
	const empty = Array.from({ length: 12 }, (v, k) => k + 1);

	const { id } = useParams();

	React.useEffect(() => {
		if (id) {
			DataManager.getEntry("city", id).then((data) => {
				setCity(data);

				DataManager.getData("place", 0, { city: data.sys.id }).then((data) => {
					setPlaces(data.items);
					setReady(true);
				});
			});
		}
	}, []);

	return (
		<>
			<Header />

			<main>
				<Banner withMap>
					{city && (
						<Map
							center={city.coordinates}
							markers={places}
							onMarkerClick={(newPlace) => {
								navigate(`/place/${newPlace.sys.id}`);
							}}
						/>
					)}
				</Banner>

				<Container className="container py-5" style={{ marginTop: "-10vh" }}>
					<div className="row g-4">
						{ready ? (
							<>
								<div className="col-lg-6 col-md-12 col-12">
									<PlaceDescription className="p-4">
										<h1 className="display-4">
											{city!.name} <small className="lead">{city!.country.name}</small>
										</h1>
										<p className="lead">{documentToReactComponents(city!.description.json)}</p>
									</PlaceDescription>
								</div>
								{places.length > 0 ? (
									places.map((place: Place) => (
										<div className="col-lg-3 col-md-4 col-6" key={place.sys.id}>
											<Link to={`/place/${place.sys.id}`}>
												<SimpleCard>
													<SimpleCardText className="p-4">
														<h2>{place.name}</h2>
														<p>
															<strong>{place.city.name}</strong>
														</p>
													</SimpleCardText>
													<img src={place.galleryCollection.items[0].url} />
												</SimpleCard>
											</Link>
										</div>
									))
								) : (
									<Empty>
										<h2 className="text-center">No places here...</h2>
									</Empty>
								)}
							</>
						) : (
							empty.map((e) => (
								<SimpleCard className="col-lg-3 col-md-4 col-6" key={e} empty={true}>
									<div>
										<SimpleCardText className="p-4">
											<SimpleCardEmptyText className="p-3 mb-2" />
											<SimpleCardEmptyText className="p-2" />
										</SimpleCardText>
									</div>
								</SimpleCard>
							))
						)}
					</div>
				</Container>
			</main>

			<Footer />
		</>
	);
};

export default Home;
