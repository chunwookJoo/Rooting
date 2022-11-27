import React, { useState } from "react";
// import { PrevButton } from "../components/ComponentsIndex";
import PrevButton from "../components/navbar/PrevButton";
import { TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import "../assets/scss/pages/Login.scss";
import { snackbarState } from "../utils/Atom";
import { useRecoilState } from "recoil";
import AlertSnackbar from "../utils/Snackbar";

const Login = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [snack, setSnack] = useRecoilState(snackbarState);

	const onChangeInput = (e, setState) => {
		setState(e.target.value);
	};

	const body = {
		email,
		password,
	};

	const onClickLoin = () => {
		localStorage.setItem("loginState", JSON.stringify(body));
		setSnack("loginSuccess");
		setTimeout(() => {
			navigate("/");
		}, 1000);
	};

	return (
		<div className="login-container">
			<div className="login-form-container">
				<PrevButton />
				<h2>로그인</h2>
				<div className="login-input-form">
					<TextField
						className="input"
						fullWidth
						id="standard-basic"
						label="이메일"
						variant="standard"
						onChange={(e) => onChangeInput(e, setEmail)}
						value={email}
					/>
					<TextField
						className="input"
						fullWidth
						id="standard-basic"
						label="비밀번호"
						variant="standard"
						onChange={(e) => onChangeInput(e, setPassword)}
						value={password}
					/>
				</div>
			</div>
			<div className="login-btn-container">
				<div className="join-label">
					아직 회원이 아니신가요? &nbsp;<Link to="/join-email">회원가입</Link>
				</div>
				<button className="login-btn" onClick={onClickLoin}>
					로그인
				</button>
			</div>
			<AlertSnackbar
				snack="loginSuccess"
				severity="success"
				message="로그인 되었습니다."
			/>
		</div>
	);
};

export default Login;
