import { TextField } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { JoinFavorItem } from "./JoinFavorItem";
// import { PrevButton } from "../../components/ComponentsIndex";
import PrevButton from "../../components/navbar/PrevButton";

const JoinFavor = () => {
	const [selectFavorItem, setSelectFavorItem] = useState(null);

	const onClickFavorItem = (e) => {
		const $li = e.target.closest("li");
		const { id } = $li.dataset;
		if (id) {
			setSelectFavorItem(id);
		}
	};

	return (
		<div className="login-container">
			<div className="login-form-container">
				<PrevButton />
				<h2>관심 주제를 1개 선택하세요</h2>
				<div className="login-input-form favorite-lists">
					{JoinFavorItem.map((item, index) => {
						return (
							<li
								data-id={item.id}
								key={index}
								onClick={(e) => onClickFavorItem(e)}
								className={selectFavorItem === item.id ? "active" : ""}
							>
								<span>{item.title}</span>
							</li>
						);
					})}
				</div>
			</div>
			<div className="login-btn-container favor-select-btn">
				<div className="join-label">
					이미 회원이신가요? &nbsp;<Link to="/login">로그인</Link>
				</div>
				<button
					className={`${selectFavorItem !== null ? "" : "disabled"} login-btn`}
				>
					회원가입
				</button>
			</div>
		</div>
	);
};

export default JoinFavor;
