import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ReactComponent as HomeIcon } from "../../assets/libs/icon/icon-home-mono.svg";
import { ReactComponent as FeedIcon } from "../../assets/libs/icon/icon-stack-up-square-mono.svg";
import { ReactComponent as UserIcon } from "../../assets/libs/icon/icon-user-mono.svg";

import { ReactComponent as HomeActiveIcon } from "../../assets/libs/icon/icon-home-mono-active.svg";
import { ReactComponent as FeedActiveIcon } from "../../assets/libs/icon/icon-stack-up-square-mono-active.svg";
import { ReactComponent as UserActiveIcon } from "../../assets/libs/icon/icon-user-mono-active.svg";
import "../../assets/scss/components/BottomNav.scss";

const BottomNav = () => {
	const { pathname } = useLocation();

	return (
		<div className="bottom-nav-container">
			<div className="bottom-nav-links">
				<NavLink to="/">
					{pathname === "/" ? <HomeActiveIcon /> : <HomeIcon />}
					<div>홈</div>
				</NavLink>
				<NavLink to="/feed/roadmap">
					{pathname === "/feed/roadmap" ? <FeedActiveIcon /> : <FeedIcon />}
					<div>피드</div>
				</NavLink>
				<NavLink to="/myroadmap">
					{pathname === "/myroadmap" ? <UserActiveIcon /> : <UserIcon />}
					<div>마이루팅</div>
				</NavLink>
			</div>
		</div>
	);
};

export default BottomNav;
