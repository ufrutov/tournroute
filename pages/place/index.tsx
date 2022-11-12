import React, { Key } from "react";
import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

import DataManager from "@/util/DataManager";
import { City, Place } from "@/util/Interface";
import { Banner } from "@/styled/Banner";
import { Container, PlaceDescription } from "@/styled/PageContent";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const Place: NextPage = () => {
	const router = useRouter();
	const [place, setPlace] = React.useState<Place>();

	React.useEffect(() => {
		if (!router.isReady) return;
		console.log("place", router.query.id);

		const id = router.query.id as string;

		if (id) {
			DataManager.getEntry("place", id).then((data) => {
				console.log(data);
				setPlace(data);
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
					{place && (
						<>
							<div className="container position-absolute pt-4">
								<h1>{place.name}</h1>
								<h4>
									<Link href={`city?id=${place.city.sys.id}`}>
										<a className="navbar-brand">{place.city.name}</a>
									</Link>
									, {place.city.country.name}
								</h4>
							</div>

							<Image src={place.galleryCollection.items[0].url} layout="fill" />
						</>
					)}
				</Banner>

				<Container className="container py-5">
					<div className="row g-4 w-100">
						<div className="col-8">
							{place && (
								<PlaceDescription className="p-4">
									{documentToReactComponents(place.description.json)}
								</PlaceDescription>
							)}
						</div>
						<div className="col-4">
							{place && place.schedule && (
								<PlaceDescription className="p-4">
									{documentToReactComponents(place.schedule.json)}
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

export default Place;
