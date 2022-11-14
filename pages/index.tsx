import React, { Key } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import DataManager from "@/util/DataManager";
import { City } from "@/util/Interface";
import { SimpleCard, SimpleCardEmptyText, SimpleCardText } from "@/styled/SimpleCard";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { Container } from "@/styled/PageContent";

const Home: NextPage = () => {
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
			<Head>
				<title>TourAndRoute</title>
				<meta name="description" content="TourAndRoute cities" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

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
								<Link href={`city?id=${item.sys.id}`} key={item.sys.id as Key}>
									<SimpleCard className="col-lg-3 col-md-4 col-6">
										<div>
											<SimpleCardText className="p-4">
												<h2>{item.name}</h2>
												<p>
													<strong>{item.country.name}</strong>
												</p>
											</SimpleCardText>
											<Image
												alt={item.name}
												src={item.galleryCollection.items[0].url}
												loader={({ src }) => src}
												layout="fill"
											/>
										</div>
									</SimpleCard>
								</Link>
						  ))
						: empty.map((e) => (
								<SimpleCard className="col-lg-3 col-md-4 col-6" key={e} empty={true}>
									<div>
										<SimpleCardText className="p-4">
											<SimpleCardEmptyText className="p-3 mb-2" />
											<SimpleCardEmptyText className="p-2" />
										</SimpleCardText>
									</div>
								</SimpleCard>
						  ))}
				</div>
			</Container>

			<Footer />
		</>
	);
};

export default Home;
