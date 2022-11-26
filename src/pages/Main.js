import React from "react";

import {
	PrevButton,
	SearchInput,
	SlideBanner,
	Contents,
	BottomNav,
} from "../components/ComponentsIndex";

const Main = () => {
	return (
		<div>
			<SearchInput />
			<SlideBanner />
			<Contents />
			<BottomNav />
		</div>
	);
};

export default Main;
