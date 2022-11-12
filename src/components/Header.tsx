import React from "react";
import Link from "next/link";

function Header() {
	return (
		<nav className="navbar navbar-dark bg-dark">
			<div className="container">
				<Link href="/">
					<a className="navbar-brand">TourAndRoute</a>
				</Link>
			</div>
		</nav>
	);
}

export default Header;
