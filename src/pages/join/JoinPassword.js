import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { PrevButton } from "../../components/ComponentsIndex";
import PrevButton from "../../components/navbar/PrevButton";

const JoinPassword = () => {
	const [password, setPassword] = useState("");
	const [passwordConfirm, setPasswordConfirm] = useState("");
	const [passwordState, setPasswordState] = useState(false);

	const onChangeInput = (e, setState) => {
		setState(e.target.value);
	};

	useEffect(() => {
		let regPW = /^(?=.*[a-zA-Z])(?=.*[0-9]).{4,25}$/;
		setPasswordState(
			password === passwordConfirm && regPW.test(passwordConfirm)
		);
	}, [password, passwordConfirm]);

	return (
		<div className="login-container">
			<div className="login-form-container">
				<PrevButton />
				<h2>정보를 입력해주세요</h2>
				<div className="login-input-form">
					<TextField
						className="input"
						fullWidth
						id="standard-basic"
						label="비밀번호"
						variant="standard"
						placeholder="4 ~ 16자의 영문, 숫자 조합"
						value={password}
						onChange={(e) => onChangeInput(e, setPassword)}
					/>
					<TextField
						className="input"
						fullWidth
						id="standard-basic"
						label="비밀번호 확인"
						variant="standard"
						value={passwordConfirm}
						onChange={(e) => onChangeInput(e, setPasswordConfirm)}
					/>
					<div className="password-check-notice">
						{passwordConfirm === "" ? (
							<></>
						) : (
							<>
								{password === passwordConfirm ? (
									<>
										<label
											htmlFor="password"
											style={{ color: "#2ea63d", fontWeight: "bold" }}
										>
											비밀번호가 서로 같아요.
										</label>
									</>
								) : (
									<>
										<label
											htmlFor="password"
											style={{ color: "#f04452", fontWeight: "bold" }}
										>
											비밀번호가 서로 달라요.
										</label>
									</>
								)}
							</>
						)}
					</div>
				</div>
			</div>
			<div className="login-btn-container">
				<div className="join-label">
					이미 회원이신가요? &nbsp;<Link to="/login">로그인</Link>
				</div>
				<Link to="/join-favor">
					<button
						className={passwordState ? "login-btn" : "login-btn disabled"}
					>
						다음
					</button>
				</Link>
			</div>
		</div>
	);
};

export default JoinPassword;
