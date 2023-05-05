import { callAPI } from "../apis/axiosClient";
import { ApiMethods } from "../enums/api";

const getAll = (offset: number, limit: number = 28) => {
    return callAPI(ApiMethods.get, "https://qjth0hsvqa.execute-api.ap-southeast-1.amazonaws.com/staging/movies", { params: {
        offset,
        limit
    } })
}

const getMovie = (movieId: string) => {
    return callAPI(ApiMethods.get, `https://qjth0hsvqa.execute-api.ap-southeast-1.amazonaws.com/staging/movies/${movieId}`, { params: {}})
}

const getAllShow = (offset: number, limit: number = 28) => {
    return callAPI(ApiMethods.get, "https://qjth0hsvqa.execute-api.ap-southeast-1.amazonaws.com/staging/tv_shows", { params: {
        offset,
        limit
    } })
}

const MoviesService = {
    getAll,
    getAllShow,
    getMovie
  };
  
  export default MoviesService;