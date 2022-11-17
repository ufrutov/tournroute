import React from "react";
import { Link } from "react-router-dom";

import DataManager from "@util/DataManager";
import { City } from "@util/Interface";
import { SimpleCard, SimpleCardEmptyText, SimpleCardText } from "@styled/SimpleCard";
import Footer from "@components/Footer";
import Header from "@components/Header";
import Hero from "@components/Hero";
import { Container } from "@styled/PageContent";

const Home = () => {
	const [cities, setCities] = React.useState([]);
	const [ready, setReady] = React.useState(false);
	const empty = Array.from({ length: 12 }, (v, k) => k + 1);

	React.useEffect(() => {
		DataManager.getData("city").then((data) => {
			setCities(data.items);
			setReady(true);
		});
	}, []);

	return (
		<>
			<Header />

			<Container className="container pb-5">
				{ready && (
					<>
						<Hero city={cities[0]} />
						<Hero city={cities[1]} reverse />
						<Hero city={cities[2]} />
					</>
				)}

				<div className="row g-4">
					{ready
						? cities.map((item: City) => (
								<div className="col-lg-3 col-md-4 col-6" key={item.sys.id}>
									<Link to={`/city/${item.sys.id}`}>
										<SimpleCard>
											<SimpleCardText className="p-4">
												<h2>{item.name}</h2>
												<p>
													<strong>{item.country.name}</strong>
												</p>
											</SimpleCardText>
											<img alt={item.name} src={item.galleryCollection.items[0].url} />
										</SimpleCard>
									</Link>
								</div>
						  ))
						: empty.map((e) => (
								<SimpleCard className="col-lg-3 col-md-4 col-6" key={e} empty={true}>
									<SimpleCardText className="p-4">
										<SimpleCardEmptyText className="p-3 mb-2" />
										<SimpleCardEmptyText className="p-2" />
									</SimpleCardText>
								</SimpleCard>
						  ))}
				</div>
			</Container>

			<Footer />
		</>
	);
};

export default Home;
