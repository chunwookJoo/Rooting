import React from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as ArrowBackIcon } from "../../assets/libs/icon/icon-arrow-back-ios.svg";

const PrevButton = () => {
	const navigate = useNavigate();

	const onClickBackPage = () => {
		navigate(-1);
	};

	return (
		<div className="prev-container">
			<span onClick={onClickBackPage} className="back-btn">
				<ArrowBackIcon size={24} />
			</span>
		</div>
	);
};

export default PrevButton;
