import React from "react";
import Link from "next/link";

function Footer() {
	return (
		<nav className="navbar-dark bg-dark">
			<div className="container py-5">
				<div className="row mb-4">
					<div className="col-md-3 col-6">
						<Link href="/">
							<a className="navbar-brand">TourAndRoute</a>
						</Link>
					</div>
					<div className="col">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<Link href="/">
									<a className="nav-link">Legal</a>
								</Link>
							</li>
							<li className="nav-item">
								<Link href="/">
									<a className="nav-link">Privacy Policy</a>
								</Link>
							</li>
							<li className="nav-item">
								<Link href="/">
									<a className="nav-link">About Us</a>
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
