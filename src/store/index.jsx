import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./MovieSlice";
import seriesReducer from "./SeriesSlice";

export default configureStore({
    reducer: {movies: moviesReducer, series: seriesReducer}
})