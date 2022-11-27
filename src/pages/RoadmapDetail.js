import React from "react";
import { useLocation } from "react-router-dom";
import Career from "../components/myrooting/Career";
import MyInfo from "../components/myrooting/MyInfo";
import BottomNav from "../components/navbar/BottomNav";
import RoadmapDetailNav from "../components/navbar/RoadmapDetailNav";

const RoadmapDetail = () => {
	const { state } = useLocation();

	return (
		<div>
			<RoadmapDetailNav roadmap={state} />
			<MyInfo roadmap={state} />
			<Career />
			<BottomNav />
		</div>
	);
};

export default RoadmapDetail;
