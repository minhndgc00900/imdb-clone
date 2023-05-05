// @ts-nocheck 
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import MoviesService from "../shared/services/MoviesService";

const initialState = {
  shows: [],
};

export const retrieveShows = createAsyncThunk(
  "shows/retrieve",
  async ({ offset }: any) => {
    const res = await MoviesService.getAllShow(offset);
    return res.movies;
  },
);

// export const findProductsByTitle = createAsyncThunk(
//   "products/findByTitle",
//   async ({ title }: any ) => {
//     const res = await MoviesService.findByTitle(title);
//     return res.data;
//   }
// );


const ShowSlice = createSlice({
  name: "Show",
  initialState,
  extraReducers: {
    [retrieveShows.fulfilled]: (state: any, action: any) => {
      state.shows.push(...action.payload);
    },
  },
});

const { reducer } = ShowSlice;
export default reducer;