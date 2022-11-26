import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as HomeIcon } from "../../assets/libs/icon/icon-home-mono.svg";
import { ReactComponent as FeedIcon } from "../../assets/libs/icon/icon-stack-up-square-mono.svg";
import { ReactComponent as UserIcon } from "../../assets/libs/icon/icon-user-mono.svg";
import "../../assets/scss/components/BottomNav.scss";

const BottomNav = () => {
	return (
		<div className="bottom-nav-container">
			<div className="bottom-nav-links">
				<Link to="/">
					<HomeIcon />
					<div>홈</div>
				</Link>
				<Link to="/feed">
					<FeedIcon />
					<div>피드</div>
				</Link>
				<Link to="/myroadmap">
					<UserIcon />
					<div>마이루팅</div>
				</Link>
			</div>
		</div>
	);
};

export default BottomNav;
