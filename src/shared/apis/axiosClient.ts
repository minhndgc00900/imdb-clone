import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import { ApiMethods } from '../../shared/enums/api';

interface ErrorResponse {
  response: AxiosResponse;
}

const API_BASE_URL = process.env.REACT_APP_URL;

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Accept: 'applications/json',
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);
axiosInstance.interceptors.response.use(
  (response) => {
    // Handle successful responses
    return response.data;
  },
  (error) => {
    // Handle error responses
    const errorMessage = error.response?.data.message || 'An error occurred';
    throw new Error(errorMessage);
  }
);

export async function makeApiRequest<T>(
  method: ApiMethods,
  path: string,
  body: object,
  config: object = {},
) {
  let res = null;
  switch (method) {
    case 'get':
      // in case GET method: body is config
      res = axiosInstance[method](path, body || config);
      break;
    default:
      res = axiosInstance[method](path, body, config);
  }

  return res
    .then((resp) => {
      return resp;
    })
    .catch(async (error: ErrorResponse) => {
      switch (error.response?.status) {
        case 400: // Wrong url or params
          break;
        case 500: // Server error
          break;
        default:
          throw error.response.data;
      }
      throw error.response.data;
    });
  };