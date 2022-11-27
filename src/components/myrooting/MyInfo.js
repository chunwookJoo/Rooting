import React from "react";
import { ReactComponent as UserProfileIcon } from "../../assets/libs/icon/Ellipse 81.svg";
import "../../assets/scss/components/myrooting/MyInfo.scss";

const MyInfo = () => {
	return (
		<div className="myinfo-container">
			<div className="image-container">
				<div className="image">
					<ul>
						<li>관심 로드맵 13</li>
						<li>관심 활동 13</li>
						<li>관심 목표 4</li>
					</ul>
				</div>
			</div>
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
					<div>비공개</div>
				</div>
				<p>진행과정</p>
			</div>
		</div>
	);
};

export default MyInfo;
