import { Dialog, Slide } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as CancelIcon } from "../../assets/libs/icon/icon-cancel-mono.svg";
import "../../assets/scss/components/modal/NotLoginModal.scss";

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const NotLoginModal = (props) => {
	const [notLoginModalOpen, setNotLoginModalOpen] = props.open;

	const onCloseModal = () => {
		setNotLoginModalOpen(false);
	};

	return (
		<Dialog
			open={notLoginModalOpen}
			onClose={onCloseModal}
			TransitionComponent={Transition}
		>
			<div className="not-login-modal-container">
				<div className="modal-info">
					<h3>
						지금 회원가입해서 <br /> 로드맵을 저장하고 기록하세요
					</h3>
					<span onClick={onCloseModal}>
						<CancelIcon />
					</span>
				</div>
				<div className="modal-btn-container">
					<div className="join-label">
						이미 회원이신가요? &nbsp;<Link to="/login">로그인</Link>
					</div>
					<Link to="/join-email">
						<button className="login-btn">15초만에 회원가입하기</button>
					</Link>
				</div>
			</div>
		</Dialog>
	);
};

export default NotLoginModal;
