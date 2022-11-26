import React from "react";

// nav
export const BottomNav = React.lazy(() => import("./navbar/BottomNav"));
export const PrevButton = React.lazy(() => import("./navbar/PrevButton"));

// main
export const Contents = React.lazy(() => import("./main/Contents"));
export const SearchInput = React.lazy(() => import("./main/SearchInput"));
export const SlideBanner = React.lazy(() => import("./main/SlideBanner"));
