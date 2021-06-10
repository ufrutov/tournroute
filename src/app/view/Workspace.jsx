import React from "react";
import OLMap from "../ux/OLMap";
import Countries from "./Countries";
import Cities from "./Cities";
import Places from "./Places";
import Routes from "./Routes";

class Workspace extends React.Component {
	_map = null;

	constructor(props) {
		super(props);

		this.state = {
			tab: "countries",
			country: "Countries",
			countryID: "",
			city: "Cities",
			cityID: "",
			listCities: [],
			mapCenter: [10.6, 49.6],
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
									}}
								>
									<span className={`nav-link ${this.state.tab === "countries" ? "active" : ""}`}>
										{this.state.country}
									</span>
								</li>
								<li
									className="nav-item mr-1"
									onClick={() => {
										this.setState({ tab: "cities" });
									}}
								>
									<span className={`nav-link ${this.state.tab === "cities" ? "active" : ""}`}>
										{this.state.city}
									</span>
								</li>
								<li
									className="nav-item mr-1"
									onClick={() => {
										this.setState({ tab: "places" });
									}}
								>
									<span className={`nav-link ${this.state.tab === "places" ? "active" : ""}`}>
										Places
									</span>
								</li>
								<li
									className="nav-item mr-1"
									onClick={() => {
										this.setState({ tab: "routes" });
									}}
								>
									<span className={`nav-link ${this.state.tab === "routes" ? "active" : ""}`}>
										Routes
									</span>
								</li>
							</ul>

							{this.state.tab === "countries" && (
								<Countries
									select={(country, cities, id) => {
										this.setState({
											country: country.name,
											countryID: id,
											city: "Cities",
											cityID: "",
											listCities: cities,
											tab: "cities",
										});
									}}
								/>
							)}

							{this.state.tab === "cities" && (
								<Cities
									list={this.state.listCities}
									select={(city, id) => {
										this.setState(
											{
												tab: "places",
												city: city.name,
												cityID: id,
												mapCenter: [city.coordinates.lon, city.coordinates.lat],
											},
											() => {
												this._map.setCoors(this.state.mapCenter, 9);
											}
										);
									}}
								/>
							)}

							{this.state.tab === "places" && (
								<Places
									city={this.state.cityID}
									country={this.state.countryID}
									select={(place, id) => {
										this._map.removeLayer("points");
										this._map.setPoints([[place.coordinates.lon, place.coordinates.lat]]);
										this._map.setCoors([place.coordinates.lon, place.coordinates.lat], 15);
									}}
								/>
							)}

							{this.state.tab === "routes" && (
								<Routes
									city={this.state.cityID}
									country={this.state.countryID}
									select={(route, points, id) => {
										this._map.removeLayer("points");
										this._map.setPoints(points);
										this._map.setCoors(
											[route.city.coordinates.lon, route.city.coordinates.lat],
											12
										);
									}}
									selectPlace={(place, id) => {
										this._map.removeLayer("points");
										this._map.setPoints([[place.coordinates.lon, place.coordinates.lat]]);
										this._map.setCoors([place.coordinates.lon, place.coordinates.lat], 15);
									}}
								/>
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
