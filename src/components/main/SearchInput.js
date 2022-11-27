import React from "react";
import { ReactComponent as SearchIcon } from "../../assets/libs/icon/icon-search-mono.svg";
import { ReactComponent as CancelIcon } from "../../assets/libs/icon/icon-cancel-mono.svg";
import "../../assets/scss/components/main/SearchInput.scss";

const SearchInput = ({ searchCancelState }) => {
	console.log(searchCancelState);
	return (
		<div className="search-container">
			<input
				className="search-input"
				type="text"
				placeholder="검색어를 입력하세요."
			/>
			<SearchIcon />
		</div>
	);
};

export default SearchInput;
