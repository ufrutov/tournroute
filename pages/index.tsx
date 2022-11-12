import React, { Key } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import DataManager from "@/util/DataManager";
import { City } from "@/util/Interface";
import { SimpleCard, SimpleCardText } from "@/styled/SimpleCard";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Container } from "@/styled/PageContent";

const Home: NextPage = () => {
	const [cities, setCities] = React.useState([]);

	React.useEffect(() => {
		DataManager.getData("city").then((data) => {
			console.log(data);

			setCities(data.items);
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

			<Container className="container py-5">
				<div className="row g-4 w-100">
					{cities.map((item: City) => (
						<Link href={`city?id=${item.sys.id}`} key={item.sys.id as Key}>
							<SimpleCard className="col-lg-3 col-md-4 col-6">
								<div>
									<SimpleCardText className="p-4">
										<h2>{item.name}</h2>
										<p>
											<strong>{item.country.name}</strong>
										</p>
									</SimpleCardText>
									<Image src={item.galleryCollection.items[0].url} layout="fill" />
								</div>
							</SimpleCard>
						</Link>
					))}
				</div>
			</Container>

			<Footer />
		</>
	);
};

export default Home;
