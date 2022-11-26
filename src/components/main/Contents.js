import React from "react";
import "../../assets/scss/components/main/Contents.scss";

const data = [
	{
		src: "https://images.unsplash.com/photo-1502657877623-f66bf489d236",
		title: "Night view",
		description: "4.21M views",
	},
	{
		src: "https://images.unsplash.com/photo-1527549993586-dff825b37782",
		title: "Lake view",
		description: "4.74M views",
	},
	{
		src: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36",
		title: "Mountain view",
		description: "3.98M views",
	},
	{
		src: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36",
		title: "Mountain view",
		description: "3.98M views",
	},
];

const popularData = [
	{ id: "1", title: "5년차 직장인의 평범한 로드맵", author: "직장인5" },
	{ id: "2", title: "5년차 직장인의 평범한 로드맵", author: "직장인5" },
	{ id: "3", title: "5년차 직장인의 평범한 로드맵", author: "직장인5" },
	{ id: "4", title: "5년차 직장인의 평범한 로드맵", author: "직장인5" },
	{ id: "5", title: "5년차 직장인의 평범한 로드맵", author: "직장인5" },
	{ id: "6", title: "5년차 직장인의 평범한 로드맵", author: "직장인5" },
	{ id: "7", title: "5년차 직장인의 평범한 로드맵", author: "직장인5" },
	{ id: "8", title: "5년차 직장인의 평범한 로드맵", author: "직장인5" },
	{ id: "9", title: "5년차 직장인의 평범한 로드맵", author: "직장인5" },
	{ id: "10", title: "5년차 직장인의 평범한 로드맵", author: "직장인5" },
];

const PopularTopTen = () => {
	return (
		<div className="contents-container">
			<div className="contents-title">
				<h3>
					인기 Top10 &emsp;{" "}
					<div>
						<span>로드맵</span> | <span>활동</span>
					</div>
				</h3>
				<span>개발</span>
			</div>
			<div className="popular-contents-description">
				<ul>
					{popularData.map((item, index) => {
						return (
							<li key={index}>
								<div>{item.id}</div>
								<div>이미지</div>
								<div>
									<h4>{item.title}</h4>
									<span>{item.author}</span>
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
						{data.map((item, index) => {
							return (
								<li key={index}>
									<span>{item.title}</span>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
			<PopularTopTen />
		</>
	);
};

export default Contents;
