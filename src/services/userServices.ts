import { apiManager } from './apiManager';
import API_ENDPOINTS from '../contants/apiEndpoints';

export const getUserProfileService = async () => {
  const resp = await apiManager.request(
    API_ENDPOINTS.GET_USER_PROFILE,
    {},
    'GET'
  );
  return resp.data;
};
