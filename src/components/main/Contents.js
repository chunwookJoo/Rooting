import React from "react";

import { ReactComponent as LikeIcon } from "../../assets/libs/icon/icon-heart-mono-base.svg";
import { ReactComponent as ViewIcon } from "../../assets/libs/icon/icon-eye-on-mono.svg";
import "../../assets/scss/components/main/Contents.scss";
import { Link } from "react-router-dom";

const todayReadmap = [
	{
		category: "개발/IT",
		title: "5년차 직장인의 평범한 로드맵",
		feedIsLike: true,
		feedLikeCount: "20",
		roadmap: [
			{
				career: "웹디자인 알바",
				careerPeriod: "2020.1~2020.6",
				careerisLike: false,
				careerLikeCount: "20",
			},
			{
				career: "웹디자인 알바",
				careerPeriod: "2020.1~2020.6",
				careerisLike: false,
				careerLikeCount: "22",
			},
			{
				career: "웹디자인 알바",
				careerPeriod: "2020.1~2020.6",
				careerisLike: false,
				careerLikeCount: "10",
			},
		],
		author: "닉네임이다",
		job: "프론트엔드 개발자",
		view: "152",
	},
];

const popularData = [
	{
		id: "1",
		title: "5년차 직장인의 평범한 로드맵",
		author: "직장인5",
		job: "프론트엔드 개발자",
	},
	{
		id: "2",
		title: "5년차 직장인의 평범한 로드맵",
		author: "직장인5",
		job: "프론트엔드 개발자",
	},
	{
		id: "3",
		title: "5년차 직장인의 평범한 로드맵",
		author: "직장인5",
		job: "프론트엔드 개발자",
	},
	{
		id: "4",
		title: "5년차 직장인의 평범한 로드맵",
		author: "직장인5",
		job: "프론트엔드 개발자",
	},
	{
		id: "5",
		title: "5년차 직장인의 평범한 로드맵",
		author: "직장인5",
		job: "프론트엔드 개발자",
	},
	{
		id: "6",
		title: "5년차 직장인의 평범한 로드맵",
		author: "직장인5",
		job: "프론트엔드 개발자",
	},
	{
		id: "7",
		title: "5년차 직장인의 평범한 로드맵",
		author: "직장인5",
		job: "프론트엔드 개발자",
	},
	{
		id: "8",
		title: "5년차 직장인의 평범한 로드맵",
		author: "직장인5",
		job: "프론트엔드 개발자",
	},
	{
		id: "9",
		title: "5년차 직장인의 평범한 로드맵",
		author: "직장인5",
		job: "프론트엔드 개발자",
	},
	{
		id: "10",
		title: "5년차 직장인의 평범한 로드맵",
		author: "직장인5",
		job: "프론트엔드 개발자",
	},
];

const PopularTopTen = () => {
	return (
		<div className="contents-container">
			<div className="contents-title">
				<h3>베스트</h3>
				<Link to="/best/roadmap">
					<span>전체보기</span>
				</Link>
			</div>
			<div className="popular-contents-description">
				<ul>
					{popularData.map((item, index) => {
						return (
							<li key={index}>
								<div>{item.id}</div>
								<div className="image"></div>
								<div className="author-container">
									<h4>{item.title}</h4>
									<span>{item.author}</span>
									<span>{item.job}</span>
								</div>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

const Contents = () => {
	return (
		<>
			<div className="contents-container">
				<div className="contents-title">
					<h3>오늘의 로드맵 추천</h3>
					<span>개발</span>
				</div>
				<div className="contents-description">
					<ul>
						<li></li>
						{todayReadmap.map((item, index) => {
							return (
								<div key={index}>
									<div className="feed-category">
										<label>{item.category}</label>
									</div>
									<h4 className="feed-title">{item.title}</h4>
									<div className="author-info-container">
										<div>
											<div className="author-job-container">
												<span>{item.author}</span>
												<span>{item.job}</span>
											</div>
											<div className="view-like-container">
												<span>
													<ViewIcon />
													{item.view}
												</span>
												<span>
													<LikeIcon />
													{item.feedLikeCount}
												</span>
											</div>
										</div>
									</div>
								</div>
							);
						})}
					</ul>
					<div className="career">
						<li>
							<span>웹디자인 알바</span>
							<span>2020.1~2020.6</span>
						</li>
						<li>
							<span>웹디자인 알바</span>
							<span>2020.1~2020.6</span>
						</li>
						<li>
							<span>웹디자인 알바</span>
							<span>2020.1~2020.6</span>
						</li>
					</div>
				</div>
			</div>
			<PopularTopTen />
		</>
	);
};

export default Contents;
