import React, { useEffect, useState } from "react";
import Logo from "../components/main/Logo";
import SearchInput from "../components/main/SearchInput";
import SlideBanner from "../components/main/SlideBanner";
import Contents from "../components/main/Contents";
import BottomNav from "../components/navbar/BottomNav";

import "../assets/scss/pages/Main.scss";
import NotLoginModal from "../components/modal/NotLoginModal";

const Main = () => {
	const [loginState, setLoginState] = useState(
		() => localStorage.getItem("loginState") || null
	);
	const [notLoginModalOpen, setNotLoginModalOpen] = useState(false);

	useEffect(() => {
		if (loginState === null) {
			setTimeout(() => {
				setNotLoginModalOpen(true);
			}, 500);
		} else {
			setNotLoginModalOpen(false);
		}
	}, [loginState]);

	return (
		<div className="main-page-container">
			<header className="header-nav-container">
				<Logo />
				<SearchInput />
			</header>
			<SlideBanner />
			<Contents />
			<BottomNav />
			<NotLoginModal open={[notLoginModalOpen, setNotLoginModalOpen]} />
		</div>
	);
};

export default Main;
