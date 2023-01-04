import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { iUserDetails } from '../types/userInterface';
import { apiManager } from '../services/apiManager';
import API_ENDPOINTS from '../contants/apiEndpoints';

export interface iUserStoreState {
  userDetails: iUserDetails;
}

const initialState: iUserStoreState = {
  userDetails: {
    id: 1,
    name: 'hamza',
    email: 'hamza@email.com',
  } as iUserDetails,
};

export const getUserDetails = createAsyncThunk(
  'user/getDetails',
  async (arg, thunkAPI) => {
    const resp = await apiManager.request(
      API_ENDPOINTS.GET_USER_PROFILE,
      {},
      'GET'
    );
    if (resp.data.error) {
      return thunkAPI.rejectWithValue(resp.data.error);
    }
    return resp.data.data;
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getUserDetails.fulfilled, (state, action) => {
      state.userDetails = action.payload;
    });
  },
});

export default userSlice.reducer;
