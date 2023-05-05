// @ts-nocheck 

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import MoviesService from "../shared/services/MoviesService";

const initialState = {
  movies: [],
  movieDetail: null
};

export const retrieveMovies = createAsyncThunk(
  "movies/retrieve",
  async ({ offset }: any) => {
    const res = await MoviesService.getAll(offset);
    return res.movies;
  },
);

export const retrieveMovieDetail = createAsyncThunk(
  "movieDetail/retrieve",
  async (id: string) => {
    const res = await MoviesService.getMovie(id);
    return res.movie;
  },
);

const MovieSlice = createSlice({
  name: "Movie",
  initialState,
  extraReducers: {
    [retrieveMovies.fulfilled]: (state: any, action: any) => {
      state.movies.push(...action.payload);
    },
    [retrieveMovieDetail.fulfilled]: (state: any, action: any) => {      
      state.movieDetail = {...action.payload};
    },
  },
});

const { reducer } = MovieSlice;
export default reducer;