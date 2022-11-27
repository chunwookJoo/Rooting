import { atom } from "recoil";

// 스낵바 상태관리
export const snackbarState = atom({
	key: "snackbar",
	default: null,
});

export const userInfoState = atom({
	key: "userInfo",
	default: null,
});
