import React from "react";
import "../../assets/scss/components/myrooting/Career.scss";

const dummyData = [
	{
		year: "2021",
		roadmap: [
			{
				career: "웹디자인 알바",
				careerPeriod: "2020.1~2020.6",
				careerDescription:
					"이러이러한 일을 했다. 진따 힘들었다. 하지만 이런일을 배웠다. 나름 배웠고 느꼈다. 인상깊었고 힘들었다. 이러이러한 일을 했다. 진따 힘들었다. 하지만 이런일을 배웠다. 나름 배웠고 느꼈다. 인상깊었고 힘들었다. ",
				careerLikeCount: "20",
			},
			{
				career: "웹디자인 알바",
				careerPeriod: "2020.1~2020.6",
				careerDescription:
					"이러이러한 일을 했다. 진따 힘들었다. 하지만 이런일을 배웠다. 나름 배웠고 느꼈다. 인상깊었고 힘들었다. 이러이러한 일을 했다. 진따 힘들었다. 하지만 이런일을 배웠다. 나름 배웠고 느꼈다. 인상깊었고 힘들었다. ",
				careerLikeCount: "20",
			},
		],
	},
	{
		year: "2022",
		roadmap: [
			{
				career: "웹디자인 알바",
				careerPeriod: "2020.1~2020.6",
				careerDescription:
					"이러이러한 일을 했다. 진따 힘들었다. 하지만 이런일을 배웠다. 나름 배웠고 느꼈다. 인상깊었고 힘들었다. 이러이러한 일을 했다. 진따 힘들었다. 하지만 이런일을 배웠다. 나름 배웠고 느꼈다. 인상깊었고 힘들었다. ",
				careerLikeCount: "20",
			},
			{
				career: "웹디자인 알바",
				careerPeriod: "2020.1~2020.6",
				careerDescription:
					"이러이러한 일을 했다. 진따 힘들었다. 하지만 이런일을 배웠다. 나름 배웠고 느꼈다. 인상깊었고 힘들었다. 이러이러한 일을 했다. 진따 힘들었다. 하지만 이런일을 배웠다. 나름 배웠고 느꼈다. 인상깊었고 힘들었다. ",
				careerLikeCount: "20",
			},
		],
	},
	{
		year: "2023",
		roadmap: [
			{
				career: "웹디자인 알바",
				careerPeriod: "2020.1~2020.6",
				careerDescription:
					"이러이러한 일을 했다. 진따 힘들었다. 하지만 이런일을 배웠다. 나름 배웠고 느꼈다. 인상깊었고 힘들었다. 이러이러한 일을 했다. 진따 힘들었다. 하지만 이런일을 배웠다. 나름 배웠고 느꼈다. 인상깊었고 힘들었다. ",
				careerLikeCount: "20",
			},
			{
				career: "웹디자인 알바",
				careerPeriod: "2020.1~2020.6",
				careerDescription:
					"이러이러한 일을 했다. 진따 힘들었다. 하지만 이런일을 배웠다. 나름 배웠고 느꼈다. 인상깊었고 힘들었다. 이러이러한 일을 했다. 진따 힘들었다. 하지만 이런일을 배웠다. 나름 배웠고 느꼈다. 인상깊었고 힘들었다. ",
				careerLikeCount: "20",
			},
		],
	},
];

const Career = () => {
	return (
		<section className="myrooting-career-container">
			<div>
				{dummyData.map((item, index) => {
					return (
						<>
							<div className="line"></div>
							<div className="career-roadmap">
								<div className="career-roadmap-year">
									<span>{item.year}</span>
									<span>+</span>
								</div>
								{item.roadmap.map((item, index) => {
									return (
										<>
											<div className="career">
												<span>{item.career}</span>
												<span>{item.careerPeriod}</span>
											</div>
											<div className="career-description">
												{item.careerDescription}
											</div>
										</>
									);
								})}
							</div>
						</>
					);
				})}
			</div>
		</section>
	);
};

export default Career;
