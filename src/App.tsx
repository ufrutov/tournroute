import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Home from "@pages/Home";
import City from "@pages/City";
import Place from "@pages/Place";

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/city/:id" element={<City />} />
				<Route path="/place/:id" element={<Place />} />
			</Routes>
		</Router>
	);
};

export default App;
