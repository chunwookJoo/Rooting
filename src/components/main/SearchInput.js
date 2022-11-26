import React from "react";
import { ReactComponent as SearchIcon } from "../../assets/libs/icon/icon-search-mono.svg";
import "../../assets/scss/components/main/SearchInput.scss";

const SearchInput = () => {
	return (
		<div className="search-container">
			<SearchIcon />
			<input
				className="search-input"
				type="text"
				placeholder="검색어를 입력하세요."
			/>
		</div>
	);
};

export default SearchInput;
