import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
//  create action
export const createUser = createAsyncThunk(
  "createUser",
  async (data, { rejectWithValue }) => {
    const response = await fetch(
      "https://6509ea4ff6553137159c3e8d.mockapi.io/crud",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    try {
      const result = await response.json();
      return result;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);
const userDetail = createSlice({
  name: "userDetail",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createUser.fulfilled, (state,action) => {
        state.loading = false;
        state.users.push(action.payload);
      })
      .addCase(createUser.rejected,(state,action)=>{
        state.loading=false;
        state.error = action.error.message;
      })
  },
});
export default userDetail.reducer;
