import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiClient } from "../api/apiClient";
import { api } from "../api/api";


export const getMovies = createAsyncThunk("movies/getMovies",async (searchWord="",thunkAPI)=>{
    const {rejectWithValue} = thunkAPI;
    try {
        const res = await apiClient.get(`?apikey=${api}&${(searchWord && searchWord != "harry") ? "s=" + searchWord : "s=Harry&type=movie"}`);
        return res.data;
    } catch (error) {
        return rejectWithValue([]);
    }
})


export const getMovieById = createAsyncThunk("movies/getMovieById",async (id,thunkAPI)=>{
    const {rejectWithValue} = thunkAPI;
    try {
        const res = await apiClient.get(`?apikey=${api}&i=${id}&type=series`);
        return res.data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
})
const MovieSlice = createSlice({
    name: "movies",
    initialState: {movies: [], isLoadingMovie: false, chosenMovie: {}, search: ""},
    reducers: {
        keyWord: (state, action) => {
            state.search = action.payload;
        }
    },
    extraReducers: {
        // getMovies
        [getMovies.pending]: (state,action) => {
            state.isLoadingMovie = true;
        },

        [getMovies.fulfilled]: (state,action) => {
            state.isLoadingMovie = false;
            state.movies = action.payload.Search;
        },

        [getMovies.rejected]: (state,action) => {
            state.isLoadingMovie = false;
            state.movies = action.payload;
            console.log(action.payload);
        },

        // getMovieById
        [getMovieById.pending]: (state,action) => {
            state.isLoadingMovie = true;
        },

        [getMovieById.fulfilled]: (state,action) => {
            state.isLoadingMovie = false;
            console.log("action from slice", action);
            state.chosenMovie = action.payload;
        },

        [getMovieById.rejected]: (state,action) => {
            state.isLoadingMovie = false;
            console.log(action.payload);
        }
    }
})

export const {selectedMovie} = MovieSlice.actions;
export default MovieSlice.reducer;
