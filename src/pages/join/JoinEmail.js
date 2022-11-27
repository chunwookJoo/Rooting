import { TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { PrevButton } from "../../components/ComponentsIndex";
import PrevButton from "../../components/navbar/PrevButton";

const JoinEmail = () => {
	const [email, setEmail] = useState("");
	const [nickname, setNickname] = useState("");

	const body = {
		email,
		nickname,
	};

	const [emailState, setEmailState] = useState(false);

	const onChangeInput = (e, setState) => {
		setState(e.target.value);
	};

	useEffect(() => {
		let regEmail =
			/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,5}$/;
		setEmailState(regEmail.test(email));
	}, [email]);

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
						label="이메일"
						variant="standard"
						value={email}
						onChange={(e) => onChangeInput(e, setEmail)}
					/>
					<div className="password-check-notice">
						{email === "" ? (
							<></>
						) : (
							<>
								{emailState ? (
									<></>
								) : (
									<>
										<label
											htmlFor="password"
											style={{ color: "#f04452", fontWeight: "bold" }}
										>
											이메일 형식이 올바르지 않습니다.
										</label>
									</>
								)}
							</>
						)}
					</div>
					<TextField
						className="input"
						fullWidth
						id="standard-basic"
						label="닉네임"
						variant="standard"
						value={nickname}
						onChange={(e) => onChangeInput(e, setNickname)}
					/>
				</div>
			</div>
			<div className="login-btn-container">
				<div className="join-label">
					이미 회원이신가요? &nbsp;<Link to="/login">로그인</Link>
				</div>
				<Link to="/join-password" state={body}>
					<button
						className={`${
							email !== "" && nickname !== "" ? "" : "disabled"
						} login-btn`}
					>
						다음
					</button>
				</Link>
			</div>
		</div>
	);
};

export default JoinEmail;
