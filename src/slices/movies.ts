import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import MoviesService from '../shared/services/MoviesService';
import { Movies, Movie } from '../shared/interfaces/common';

export type MoviesState = {
  movies: Movies[];
  movieDetail: Movie | null;
};

interface requestData {
  offset: number;
}

const initialState: MoviesState = {
  movies: [],
  movieDetail: null,
};

export const retrieveMovies = createAsyncThunk(
  'movies/retrieve',
  async ({ offset }: requestData) => {
    const res = await MoviesService.getAll(offset);
    return res.movies;
  }
);

export const retrieveMovieDetail = createAsyncThunk(
  'movieDetail/retrieve',
  async (id: string) => {
    const res = await MoviesService.getMovie(id);
    return res.movie;
  }
);

const MovieSlice = createSlice({
  name: 'Movie',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(retrieveMovies.fulfilled, (state, action) => {
      state.movies.push(...action.payload);
    }),
      builder.addCase(retrieveMovieDetail.fulfilled, (state, action) => {
        state.movieDetail = { ...action.payload };
      });
  },
});

const { reducer } = MovieSlice;
export default reducer;
