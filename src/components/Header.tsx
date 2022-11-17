import React from "react";
import { Link } from "react-router-dom";

function Header() {
	return (
		<nav className="navbar navbar-dark bg-dark">
			<div className="container">
				<Link to="/" className="navbar-brand">
					TourAndRoute
				</Link>

				{/* <form className="d-flex" role="search">
					<input
						className="form-control me-2"
						type="search"
						placeholder="Search"
						aria-label="Search"
					/>
					<button className="btn btn-outline-primary" type="submit">
						Search
					</button>
				</form> */}
			</div>
		</nav>
	);
}

export default Header;
