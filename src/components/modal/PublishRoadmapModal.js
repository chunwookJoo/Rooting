import { Dialog, TextField } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as CancelIcon } from "../../assets/libs/icon/icon-cancel-mono.svg";
import "../../assets/scss/components/modal/PublishRoadmapModal.scss";

const PublishRoadmapModal = (props) => {
	const [publishModalOpen, setPublishModalOpen] = props.open;

	const onCloseModal = () => {
		setPublishModalOpen(false);
	};

	return (
		<Dialog open={publishModalOpen} onClose={onCloseModal}>
			<div className="not-login-modal-container">
				<div className="modal-info">
					<h3>
						발행할 로드맵의 <br /> 제목을 입력해주세요
					</h3>
				</div>
				<div>
					<TextField
						className="input"
						fullWidth
						id="standard-basic"
						label="제목"
						variant="standard"
					/>
				</div>
				<div className="modal-btn-container">
					<div className="modal-btns">
						<button className="login-btn cancel" onClick={onCloseModal}>
							취소
						</button>
						<button className="login-btn">발행하기</button>
					</div>
				</div>
			</div>
		</Dialog>
	);
};

export default PublishRoadmapModal;
