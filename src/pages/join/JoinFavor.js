import { TextField } from "@mui/material";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { JoinFavorItem } from "./JoinFavorItem";
import PrevButton from "../../components/navbar/PrevButton";
import { snackbarState } from "../../utils/Atom";
import { useRecoilState } from "recoil";
import AlertSnackbar from "../../utils/Snackbar";

const JoinFavor = () => {
	const { state } = useLocation();
	const navigate = useNavigate();
	const [selectFavorItem, setSelectFavorItem] = useState(null);
	const [snack, setSnack] = useRecoilState(snackbarState);

	const body = {
		...state,
		selectFavorItem,
	};

	const onClickFavorItem = (e) => {
		const $li = e.target.closest("li");
		const { id } = $li.dataset;
		if (id) {
			setSelectFavorItem(id);
		}
	};

	const onClickJoin = () => {
		localStorage.setItem("loginState", JSON.stringify(body));
		setSnack("joinSuccess");
		setTimeout(() => {
			navigate("/");
		}, 1000);
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
					onClick={onClickJoin}
					className={`${selectFavorItem !== null ? "" : "disabled"} login-btn`}
				>
					회원가입
				</button>
			</div>

			<AlertSnackbar
				snack="joinSuccess"
				severity="success"
				message="회원가입이 완료되었습니다."
			/>
		</div>
	);
};

export default JoinFavor;
