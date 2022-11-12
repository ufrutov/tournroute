import React, { Key } from "react";
import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

import DataManager from "@/util/DataManager";
import { City, Place } from "@/util/Interface";
import { Banner } from "@/styled/Banner";
import { Container } from "@/styled/PageContent";
import { Empty } from "@/styled/Empty";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { SimpleCard, SimpleCardText } from "@/styled/SimpleCard";

const City: NextPage = () => {
	const router = useRouter();
	const [city, setCity] = React.useState<City>();
	const [places, setPlaces] = React.useState<Place[]>([]);

	React.useEffect(() => {
		if (!router.isReady) return;
		console.log(router.query.id);

		const id = router.query.id as string;

		if (id) {
			DataManager.getEntry("city", id).then((data) => {
				setCity(data);

				DataManager.getData("place", 0, { city: data.sys.id }).then((data) => {
					setPlaces(data.items);
				});
			});
		}
	}, [router.isReady]);

	return (
		<>
			<Head>
				<title>TourAndRoute</title>
				<meta name="description" content="TourAndRoute cities" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />

			<main>
				<Banner>
					{city && (
						<>
							<div className="container position-absolute pt-4">
								<h1>{city.name}</h1>
								<h4>{city.country.name}</h4>
							</div>

							<Image src={city.galleryCollection.items[0].url} layout="fill" />
						</>
					)}
				</Banner>

				<Container className="container py-5">
					<div className="row g-4 w-100">
						{places.length > 0 ? (
							places.map((place: Place) => (
								<Link href={`place?id=${place.sys.id}`} key={place.sys.id as Key}>
									<SimpleCard className="col-lg-3 col-md-4 col-6">
										<div>
											<SimpleCardText className="p-4">
												<h2>{place.name}</h2>
												<p>
													<strong>{place.city.name}</strong>
												</p>
											</SimpleCardText>
											<Image src={place.galleryCollection.items[0].url} layout="fill" />
										</div>
									</SimpleCard>
								</Link>
							))
						) : (
							<Empty>
								<h2 className="text-center">No places here...</h2>
							</Empty>
						)}
					</div>
				</Container>
			</main>

			<Footer />
		</>
	);
};

export default City;
