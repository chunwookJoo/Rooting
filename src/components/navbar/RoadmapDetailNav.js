import React from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as ArrowBackIcon } from "../../assets/libs/icon/icon-arrow-back-ios.svg";
import { ReactComponent as LikeIcon } from "../../assets/libs/icon/icon-heart-mono.svg";
const RoadmapDetailNav = ({ roadmap }) => {
	console.log(roadmap);
	const navigate = useNavigate();

	const onClickBackPage = () => {
		navigate(-1);
	};
	return (
		<header>
			<div className="topnav-container">
				<h3>
					<ArrowBackIcon onClick={onClickBackPage} />
					{roadmap.title}
				</h3>
				<LikeIcon />
			</div>
		</header>
	);
};

export default RoadmapDetailNav;
