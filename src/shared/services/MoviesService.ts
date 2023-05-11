import { makeApiRequest } from "../apis/axiosClient";
import { ApiMethods } from "../enums/api";
import { Movies } from "../interfaces/common";

const getAll = async (offset: number, limit = 28) => {
    const response = await makeApiRequest<Movies[]>(ApiMethods.get, "movies", {
        offset,
        limit
    });

    return response
}

const getMovie = async (movieId: string) => {
    const response = await makeApiRequest<Movies>(ApiMethods.get, `movies/${movieId}`, { })

    return response
}

const getAllShow = async (offset: number, limit = 28) => {
    const response = await makeApiRequest<Movies[]>(ApiMethods.get, "tv_shows", {
        params: {
            offset,
            limit
        }
    })

    return response
}

const MoviesService = {
    getAll,
    getAllShow,
    getMovie
};

export default MoviesService;