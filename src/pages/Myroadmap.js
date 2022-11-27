import React from "react";
// import { BottomNav } from "../components/ComponentsIndex";
import BottomNav from "../components/navbar/BottomNav";
import TopNav from "../components/navbar/TopNav";
import MyInfo from "../components/myrooting/MyInfo";
import Career from "../components/myrooting/Career";

const Myroadmap = () => {
	return (
		<div>
			<TopNav />
			<MyInfo />
			<Career />
			<BottomNav />
		</div>
	);
};

export default Myroadmap;
