import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import MoviesService from '../shared/services/MoviesService';
import { Movies } from '../shared/interfaces/common';

export type ShowsState = {
  shows: Movies[];
};

interface requestData {
  offset: number;
}

const initialState: ShowsState = {
  shows: [],
};

export const retrieveShows = createAsyncThunk(
  'shows/retrieve',
  async ({ offset }: requestData) => {
    const res = await MoviesService.getAllShow(offset);
    return res.movies;
  }
);

const ShowSlice = createSlice({
  name: 'Show',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(retrieveShows.fulfilled, (state, action) => {
      state.shows.push(...action.payload);
    });
  },
});

const { reducer } = ShowSlice;
export default reducer;
