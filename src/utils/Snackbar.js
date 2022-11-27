import { Alert, Snackbar } from "@mui/material";
import { createPortal } from "react-dom";
import { useRecoilState } from "recoil";
import { snackbarState } from "./Atom";

const DefaultSnackbar = (props) => {
	return (
		<Snackbar
			sx={{ height: "30%" }}
			anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
			autoHideDuration={1500}
			{...props}
		>
			<Alert
				onClose={props.onClose}
				variant="standard"
				severity={props.severity}
			>
				{props.children}
			</Alert>
		</Snackbar>
	);
};

const AlertSnackbar = (props) => {
	const snackState = props.snack;
	const severity = props.severity;
	const message = props.message;
	const [snack, setSnack] = useRecoilState(snackbarState);

	const snackbarHandleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}
		setSnack(null);
	};

	return (
		<>
			{snack === snackState &&
				createPortal(
					<DefaultSnackbar
						open={snack === snackState}
						onClose={snackbarHandleClose}
						severity={severity}
					>
						{message}
					</DefaultSnackbar>,
					document.getElementById("snackbarcontainer")
				)}
		</>
	);
};

export default AlertSnackbar;
