import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiClient } from "../api/apiClient";
import { api } from "../api/api";

export const getSeries = createAsyncThunk("series/getSeries",async (_,thunkAPI)=>{
    const {rejectWithValue} = thunkAPI;
    try {
        const res = await apiClient.get(`?apikey=${api}&s=Lord&type=series`);
        return res.data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
})


export const getSerieById = createAsyncThunk("movies/getSerieById",async (id,thunkAPI)=>{
    const {rejectWithValue} = thunkAPI;
    try {
        const res = await apiClient.get(`?apikey=${api}&i=${id}&type=series`);
        return res.data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
})
const SerieSlice = createSlice({
    name: "movies",
    initialState: {series: [], isLoadingSerie: false, chosenSerie: {}},
    reducers: {
        selectedMovie: (state, action) => {
            state.chosenSerie = action.payload;
        }
    },
    extraReducers: {
        // getSeries
        [getSeries.pending]: (state,action) => {
            state.isLoadingSerie = true;
        },

        [getSeries.fulfilled]: (state,action) => {
            state.isLoadingSerie = false;
            state.series = action.payload.Search;
        },

        [getSeries.rejected]: (state,action) => {
            state.isLoadingSerie = true;
            console.log(action.payload);
        },

        // getSerieById
        [getSerieById.pending]: (state,action) => {
            state.isLoadingSerie = true;
        },

        [getSerieById.fulfilled]: (state,action) => {
            state.isLoadingSerie = false;
            state.chosenSerie = action.payload;
        },

        [getSerieById.rejected]: (state,action) => {
            state.isLoadingSerie = true;
            console.log(action.payload);
        }
    }
})

export const {selectedMovie} = SerieSlice.actions;
export default SerieSlice.reducer;
