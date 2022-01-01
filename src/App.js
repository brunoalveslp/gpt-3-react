import React from "react";

import {CTA, Brand, Navbar} from "./components";
import {
	Header,
	Footer,
	Features,
	Blog,
	Possibility,
	WhatGP3,
} from "./containers";
import "./App.css";

const App = () => {
	return (
		<div className="App">
			<div className="gradient__bg">
				<Navbar />
				<Header />
			</div>
			<Brand />
			<WhatGP3 />
			<Features />
			<Possibility />
			<CTA />
			<Blog />
			<Footer />
		</div>
	);
};

export default App;
