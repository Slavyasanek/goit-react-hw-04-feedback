import { configureStore } from "@reduxjs/toolkit";
import { statisticsReducer } from "./statisticsSlice";

export const store = configureStore({
    reducer: statisticsReducer,
});