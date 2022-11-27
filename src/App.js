import { Routes, Route } from "react-router-dom";
// import { Main, Login, Join, Feed, Myroadmap } from "./pages/PageIndex";
import Main from "./pages/Main";
import Feed from "./pages/Feed";
import Best from "./pages/Best";
import Myroadmap from "./pages/Myroadmap";
import Login from "./pages/Login";
import JoinEmail from "./pages/join/JoinEmail";
import JoinPassword from "./pages/join/JoinPassword";
import JoinFavor from "./pages/join/JoinFavor";

import Loading from "./components/Loading";
import { Suspense } from "react";
import "./App.scss";
import ScrollToTop from "./ScrollToTop";
import RoadmapDetail from "./pages/RoadmapDetail";

function App() {
	return (
		<>
			<ScrollToTop />
			<Routes>
				<Route exact path="/" element={<Main />} />
				<Route path="/feed/roadmap" element={<Feed />} />
				<Route path="/feed/roadmap/:id" element={<RoadmapDetail />} />
				<Route path="/best/roadmap" element={<Best />} />
				<Route path="/myroadmap" element={<Myroadmap />} />

				<Route path="/login" element={<Login />} />
				<Route path="/join-email" element={<JoinEmail />} />
				<Route path="/join-password" element={<JoinPassword />} />
				<Route path="/join-favor" element={<JoinFavor />} />
			</Routes>
		</>
	);
}

export default App;
