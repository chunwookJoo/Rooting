import React from "react";
// import { BottomNav } from "../components/ComponentsIndex";
import BottomNav from "../components/navbar/BottomNav";
import FeedContent from "../components/feed/FeedContent";
import TopNav from "../components/navbar/TopNav";

const Feed = () => {
	return (
		<div>
			<TopNav />
			<FeedContent />
			<BottomNav />
		</div>
	);
};

export default Feed;
