import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { REACT_APP_BASE_API_URL } from '../contants/envConstants';

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: REACT_APP_BASE_API_URL,
  responseType: 'json',
  validateStatus: (status: number) => status >= 200,
  headers: {
    'Content-type': 'application/json',
  },
});

type axiosMethodTypes = 'GET' | 'POST' | 'DELETE' | 'PUT' | 'PATCH';

export const apiManager = {
  request: async (
    url: string,
    body: unknown,
    method: axiosMethodTypes,
    baseURL = REACT_APP_BASE_API_URL
  ): Promise<AxiosResponse> => {
    try {
      return axiosInstance({
        method: method,
        url: url,
        data: body,
        baseURL: baseURL,
      });
    } catch (e) {
      throw new Error(e as string);
    }
  },
};
