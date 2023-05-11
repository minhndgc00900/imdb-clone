import { makeApiRequest } from "../apis/axiosClient";
import { ApiMethods } from "../enums/api";
import { MovieDetail, MovieList } from "../interfaces/common";

const getAll = (offset: number, limit = 28) => makeApiRequest<MovieList>(ApiMethods.get, "movies", {
    params: {
        offset,
        limit
    }
});

const getMovie = (movieId: string) => makeApiRequest<MovieDetail>(ApiMethods.get, `movies/${movieId}`, {})

const getAllShow = (offset: number, limit = 28) => makeApiRequest<MovieList>(ApiMethods.get, "tv_shows", {
    params: { offset, limit }
})

const MoviesService = {
    getAll,
    getAllShow,
    getMovie
};

export default MoviesService;