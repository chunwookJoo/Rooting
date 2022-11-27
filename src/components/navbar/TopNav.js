import React, { useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import PrevButton from "./PrevButton";
import { ReactComponent as SearchIcon } from "../../assets/libs/icon/icon-search-mono.svg";
import { ReactComponent as ArrowBackIcon } from "../../assets/libs/icon/icon-arrow-back-ios.svg";
import { ReactComponent as SettingIcon } from "../../assets/libs/icon/icon-setting-mono.svg";
import { ReactComponent as CancelIcon } from "../../assets/libs/icon/icon-cancel-mono.svg";
import { SearchInput } from "../ComponentsIndex";
import "../../assets/scss/components/TopNav.scss";

const TopNav = () => {
	const navigate = useNavigate();
	const { pathname } = useLocation();
	const [searchInputState, setSearchInputState] = useState(false);

	const onClickSearchIcon = () => {
		setSearchInputState(!searchInputState);
	};

	const onClickBackPage = () => {
		navigate(-1);
	};

	return (
		<header>
			{pathname === "/myroadmap" ? (
				<div className="topnav-container">
					<h2>마이루팅</h2>
					<SettingIcon />
				</div>
			) : (
				<>
					{pathname === "/feed/roadmap" ? (
						<div className="topnav-container">
							<h2>피드</h2>
							<div className="nav">
								<NavLink to="/feed/roadmap">로드맵</NavLink>
								<Link>활동</Link>
							</div>
							<span>
								<SearchIcon />
							</span>
						</div>
					) : (
						<div className="topnav-container">
							<h2>
								<ArrowBackIcon onClick={onClickBackPage} />
								베스트
							</h2>
							<div className="nav">
								<NavLink to="/best/roadmap">로드맵</NavLink>
								<Link>활동</Link>
							</div>
							<span>
								<SearchIcon />
							</span>
						</div>
					)}
				</>
			)}
		</header>
	);
};

export default TopNav;
