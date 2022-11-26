import React from "react";
import {
	Logo,
	SearchInput,
	SlideBanner,
	Contents,
	BottomNav,
} from "../components/ComponentsIndex";
import "../assets/scss/pages/Main.scss";

const Main = () => {
	return (
		<div className="main-page-container">
			<header className="header-nav-container">
				<Logo />
				<SearchInput />
			</header>
			<SlideBanner />
			<Contents />
			<BottomNav />
		</div>
	);
};

export default Main;
