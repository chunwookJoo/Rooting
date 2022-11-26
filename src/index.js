import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<RecoilRoot>
		<BrowserRouter>
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</BrowserRouter>
	</RecoilRoot>
);
