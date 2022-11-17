import React from "react";
import { Link } from "react-router-dom";

function Footer() {
	return (
		<nav className="navbar-dark bg-dark">
			<div className="container py-5">
				<div className="row mb-4">
					<div className="col-md-3 col-6">
						<Link to="/" className="navbar-brand">
							TourAndRoute
						</Link>
					</div>
					<div className="col">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<Link to="/" className="nav-link">
									Legal
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/" className="nav-link">
									Privacy Policy
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/" className="nav-link">
									About Us
								</Link>
							</li>
						</ul>
					</div>
					<div className="col">Column</div>
				</div>

				<p className="navbar-brand fs-6">
					<small>TourAndRoute © 2022</small>
				</p>
			</div>
		</nav>
	);
}

export default Footer;
