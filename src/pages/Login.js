import React from "react";
// import { PrevButton } from "../components/ComponentsIndex";
import PrevButton from "../components/navbar/PrevButton";
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";
import "../assets/scss/pages/Login.scss";

const Login = () => {
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
					/>
					<TextField
						className="input"
						fullWidth
						id="standard-basic"
						label="비밀번호"
						variant="standard"
					/>
				</div>
			</div>
			<div className="login-btn-container">
				<div className="join-label">
					아직 회원이 아니신가요? &nbsp;<Link to="/join-email">회원가입</Link>
				</div>
				<button className="login-btn">로그인</button>
			</div>
		</div>
	);
};

export default Login;
