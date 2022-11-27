import { Switch } from "@mui/material";
import React, { useState } from "react";
import { ReactComponent as UserProfileIcon } from "../../assets/libs/icon/Ellipse 81.svg";
import { ReactComponent as ProcessIcon } from "../../assets/libs/icon/Group 4944.svg";
import "../../assets/scss/components/myrooting/MyInfo.scss";
import PublishRoadmapModal from "../modal/PublishRoadmapModal";

const MyInfo = ({ roadmap }) => {
	const [switchState, setSwitchState] = useState(false);
	const [publishModalOpen, setPublishModalOpen] = useState(false);
	const label = { inputProps: { "aria-label": "Switch demo" } };

	const onChangeSwitch = (e) => {
		setSwitchState(e.target.checked);
		setPublishModalOpen(true);
	};
	return (
		<div className="myinfo-container">
			{roadmap ? (
				""
			) : (
				<div className="image-container">
					<div className="image">
						<ul>
							<li>관심 로드맵 13</li>
							<li>관심 활동 13</li>
							<li>관심 목표 4</li>
						</ul>
					</div>
				</div>
			)}
			<div className="user-profile-container">
				<div className="user-profile">
					<div className="user-name">
						<UserProfileIcon />
						<div>
							<span>윤다인</span>
							<br />
							<span>백수 디자이너</span>
						</div>
					</div>
					{roadmap ? (
						""
					) : (
						<span
							className={`open-switch ${switchState ? "open-roadmap" : ""}`}
						>
							{switchState ? "공개중" : "비공개"}
							<Switch
								{...label}
								onChange={(e) => {
									onChangeSwitch(e);
								}}
							/>
						</span>
					)}
				</div>
				<p>
					<ProcessIcon />
				</p>
			</div>
			<PublishRoadmapModal open={[publishModalOpen, setPublishModalOpen]} />
		</div>
	);
};

export default MyInfo;
