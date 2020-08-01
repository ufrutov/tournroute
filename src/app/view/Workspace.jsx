import React from "react";
import OLMap from "../ux/OLMap";
import Util from "../util/Util";
import { countries, cities, places, routes } from "../../data";

class Workspace extends React.Component {
	_map = null;

	constructor(props) {
		super(props);

		this.state = {
			tab: "countries",
			country: "Countries",
			city: "Cities",
			listCities: cities,
			listPlaces: places,
			listRoutes: routes,
			mapCenter: [10.6, 49.6]
		};
	}
	render() {
		return (
			<React.Fragment>
				<nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark py-1">
					<div className="container">
						<h6 className="navbar-brand font-weight-bolder mb-0">Tour & Route</h6>
					</div>
				</nav>
				<div className="ux-gradient"></div>
				<div className="container px-md-0 mb-5">
					<div className="row">
						<div className="col-12 col-md-7 pt-4">
							<ul className="nav nav-tabs">
								<li
									className="nav-item mr-1"
									onClick={() => {
										this.setState({ tab: "countries" });
									}}>
									<span className={`nav-link ${this.state.tab === "countries" ? "active" : ""}`}>
										{this.state.country}
									</span>
								</li>
								<li
									className="nav-item mr-1"
									onClick={() => {
										this.setState({ tab: "cities" });
									}}>
									<span className={`nav-link ${this.state.tab === "cities" ? "active" : ""}`}>{this.state.city}</span>
								</li>
								<li
									className="nav-item mr-1"
									onClick={() => {
										this.setState({ tab: "places" });
									}}>
									<span className={`nav-link ${this.state.tab === "places" ? "active" : ""}`}>Places</span>
								</li>
								<li
									className="nav-item mr-1"
									onClick={() => {
										this.setState({ tab: "routes" });
									}}>
									<span className={`nav-link ${this.state.tab === "routes" ? "active" : ""}`}>Routes</span>
								</li>
							</ul>

							{this.state.tab === "countries" && (
								<div className="row mt-3">
									{countries.map((c) => (
										<div
											className="col-12 col-md-6 col-lg-4 mt-3"
											key={`country-${c.id}`}
											onClick={() => {
												this.setState({
													tab: "cities",
													city: "Cities",
													country: c.name,
													listCities: Util.filter(cities, "country", c.id),
													listRoutes: Util.filter(routes, "country", c.id)
												});
											}}>
											<div className="card bg-primary text-white ux-cursor-pointer">
												<div className="card-body py-3 px-3 ">
													<div className="d-flex align-items-center justify-content-between">
														<h4 className="m-0 font-weight-bolder">{c.name}</h4>
														<div className="small text-right">
															{Util.filter(cities, "country", c.id).map((ct) => (
																<div key={`country-city-${ct.id}`}>{ct.name}</div>
															))}
														</div>
													</div>
												</div>
												<div className="card-footer py-2 px-3 bg-primary d-flex align-items-center justify-content-between">
													<span className="small stretched-link">View Cities</span>
													<div className="small">
														<i className="fa fa-arrow-circle-right"></i>
													</div>
												</div>
											</div>
										</div>
									))}
								</div>
							)}

							{this.state.tab === "cities" && (
								<div className="row mt-3">
									{this.state.listCities.map((c) => (
										<div
											className="col-12 col-md-6 col-lg-4 mt-3"
											key={`city-${c.id}`}
											onClick={() => {
												this.setState(
													{
														tab: "places",
														city: c.name,
														mapCenter: Util.parseCoors(c.coordinates),
														listPlaces: Util.filter(places, "city", c.id),
														listRoutes: Util.filter(routes, "city", c.id)
													},
													() => {
														this._map.setCoors(this.state.mapCenter, 9);
													}
												);
											}}>
											<div className="card bg-success text-white ux-cursor-pointer">
												<div className="card-body py-3 px-3 ">
													<div className="d-flex align-items-center justify-content-between">
														<h4 className="m-0 font-weight-bolder">{c.name}</h4>
														<h6 className="m-0 font-weight-bolder">{Util.getById(countries, c.country).name}</h6>
													</div>
												</div>
												<div className="card-footer py-2 px-3 bg-success d-flex align-items-center justify-content-between">
													<span className="small stretched-link">View Places</span>
													<div className="small">
														<i className="fa fa-arrow-circle-right"></i>
													</div>
												</div>
											</div>
										</div>
									))}
								</div>
							)}

							{this.state.tab === "places" && (
								<div className="row mt-3">
									{this.state.listPlaces.map((p) => {
										const pCity = Util.getById(cities, p.city);
										const pCountry = Util.getById(countries, pCity.country);

										return (
											<div
												className="col-12 mt-3"
												key={`place-${p.id}`}
												onClick={() => {
													this._map.removeLayer("points");
													this._map.setPoints([Util.parseCoors(p.coordinates)]);
													this._map.setCoors(Util.parseCoors(p.coordinates), 15);
												}}>
												<div className="card ux-place-card ux-cursor-pointer">
													<div className="card-header">
														<div className="d-flex align-items-end justify-content-between">
															<h5 className="m-0 font-weight-bolder">{p.name}</h5>
															<h6 className="m-0 font-weight-bolder">
																{pCity.name}, {pCountry.name}
															</h6>
														</div>
													</div>
													<div className="card-body">
														<p className="m-0">{p.description}</p>
													</div>
												</div>
											</div>
										);
									})}
								</div>
							)}

							{this.state.tab === "routes" && (
								<div className="row mt-3">
									{this.state.listRoutes.map((r) => {
										const rCity = Util.getById(cities, r.city);
										const rCountry = Util.getById(countries, r.country);
										const points = r.places.map((id) => {
											const place = Util.getById(places, id);
											return Util.parseCoors(place.coordinates);
										});

										return (
											<div className="col-12 mt-3" key={`route-${r.id}`}>
												<div className="card ux-cursor-pointer">
													<div className="card-header bg-primary text-white"
														onClick={() => {
															this._map.removeLayer("points");
															this._map.setPoints(points);
															this._map.setRoute(points);
															this._map.setCoors(Util.parseCoors(rCity.coordinates), 12);
														}}>
														<div className="d-flex align-items-end justify-content-between">
															<h5 className="m-0 font-weight-bolder">{r.name}</h5>
															<h6 className="m-0 font-weight-bolder">
																{rCity.name}, {rCountry.name}
															</h6>
														</div>
													</div>
													<div className="card-body pt-2">
														<div className="row">
															{r.places.map((id) => {
																const place = Util.getById(places, id);

																return (
																	<div className="ux-route-item col-12 py-2"
																		key={`route-place-${place.id}`}
																		onClick={() => {
																			this._map.removeLayer("points");
																			this._map.setPoints(points);
																			this._map.setRoute(points);
																			this._map.setCoors(Util.parseCoors(place.coordinates), 15);
																		}}>
																		<div className="d-flex align-items-center">
																			<div className="mr-3">
																				<i className="fa fa-circle text-primary"></i>
																			</div>
																			<div className="card ux-place-card ux-cursor-pointer">
																				<div className="card-header">
																					<h5 className="m-0 font-weight-bolder">{place.name}</h5>
																				</div>
																				<div className="card-body">
																					<p className="small mb-2">{place.description}</p>
																					<p className="small mb-0">{place.schedule}</p>
																				</div>
																			</div>
																		</div>
																	</div>
																);
															})}
														</div>
													</div>
												</div>
											</div>
										);
									})}
								</div>
							)}
						</div>
						<div className="col-12 col-md-5">
							<div className="sticky-top pt-4">
								<div className="card shadow">
									<div className="card-header">
										<h6 className="m-0 font-weight-bold">Map view</h6>
									</div>
									<div className="card-body p-0">
										<OLMap
											ref={(ref) => {
												this._map = ref;
											}}
											center={this.state.mapCenter}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Workspace;
