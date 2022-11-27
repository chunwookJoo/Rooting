import React from "react";
import { ReactComponent as UserProfileIcon } from "../../assets/libs/icon/Ellipse 81.svg";
import { ReactComponent as MoreIcon } from "../../assets/libs/icon/icon-dots-mono.svg";
import { ReactComponent as LikeActiveIcon } from "../../assets/libs/icon/icon-heart-mono-active.svg";
import { ReactComponent as UnLikeIcon } from "../../assets/libs/icon/icon-heart-mono.svg";
import { ReactComponent as LikeIcon } from "../../assets/libs/icon/icon-heart-mono-base.svg";
import { ReactComponent as ViewIcon } from "../../assets/libs/icon/icon-eye-on-mono.svg";
import "../../assets/scss/components/feed/FeedContent.scss";

const dummyFeed = [
	{
		category: "개발/IT",
		title: "5년차 직장인의 평범한 로드맵",
		feedIsLike: true,
		feedLikeCount: "152",
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
	{
		category: "개발/IT",
		title: "5년차 직장인의 평범한 로드맵",
		feedIsLike: true,
		feedLikeCount: "152",
		roadmap: [
			{
				career: "퍼블리싱 알바",
				careerPeriod: "2020.1~2020.6",
				careerisLike: true,
				careerLikeCount: "20",
			},
			{
				career: "퍼블리싱 알바",
				careerPeriod: "2020.1~2020.6",
				careerisLike: true,
				careerLikeCount: "20",
			},
		],
		author: "머쓱이",
		job: "프론트엔드 개발자",
		view: "123",
	},
	{
		category: "개발/IT",
		title: "8년차 직장인의 평범한 로드맵",
		feedIsLike: true,
		feedLikeCount: "152",
		roadmap: [
			{
				career: "웹디자인 알바",
				careerPeriod: "2020.1~2020.6",
				careerisLike: false,
				careerLikeCount: "22",
			},
			{
				career: "웹디자인 알바",
				careerPeriod: "2020.1~2020.6",
				careerisLike: true,
				careerLikeCount: "25",
			},
			{
				career: "웹디자인 알바",
				careerPeriod: "2020.1~2020.6",
				careerisLike: true,
				careerLikeCount: "20",
			},
			{
				career: "웹디자인 알바",
				careerPeriod: "2020.1~2020.6",
				careerisLike: false,
				careerLikeCount: "10",
			},
		],
		author: "프롱이",
		job: "프론트엔드 개발자",
		view: "200",
	},
	{
		category: "개발/IT",
		title: "5년차 직장인의 평범한 로드맵",
		feedIsLike: false,
		feedLikeCount: "152",
		roadmap: [
			{
				career: "프론트개발",
				careerPeriod: "2020.1~2020.6",
				careerisLike: true,
				careerLikeCount: "12",
			},
			{
				career: "프론트개발",
				careerPeriod: "2020.1~2020.6",
				careerisLike: true,
				careerLikeCount: "23",
			},
			{
				career: "프론트개발",
				careerPeriod: "2020.1~2020.6",
				careerisLike: true,
				careerLikeCount: "20",
			},
		],
		author: "닉넥익",
		job: "프론트엔드 개발자",
		view: "456",
	},
];

const FeedContent = () => {
	return (
		<div className="feed-global-container">
			{dummyFeed.map((item, index) => {
				return (
					<li className="feed-container">
						<div className="feed-category">
							<label>{item.category}</label>
						</div>
						<h4 className="feed-title">{item.title}</h4>
						<div className="career-global-container">
							{item.roadmap.map((item, index) => {
								return (
									<div className="career-container">
										<div className="career-period-container">
											<span className="career">{item.career}</span>
											<span className="career-period">{item.careerPeriod}</span>
										</div>
										<div className="career-like-container">
											<span>
												{item.careerisLike ? (
													<LikeActiveIcon />
												) : (
													<UnLikeIcon />
												)}
											</span>
											<span>{item.careerLikeCount}</span>
										</div>
									</div>
								);
							})}
						</div>

						<div className="author-container">
							<div className="author-info-container">
								<div>
									<UserProfileIcon />
								</div>
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
							<div className="feed-like-container">
								<span>
									{item.feedIsLike ? <LikeActiveIcon /> : <UnLikeIcon />}
								</span>
								<span>
									<MoreIcon />
								</span>
							</div>
						</div>
					</li>
				);
			})}
		</div>
	);
};

export default FeedContent;
