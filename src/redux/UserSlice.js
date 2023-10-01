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
// read action
export const showUser=createAsyncThunk("showUser",async(args ,{rejectWithValue})=>{
  const response=await fetch("https://6509ea4ff6553137159c3e8d.mockapi.io/crud")
  try{
    const result =await response.json()
    return result;

  }catch(e){
  return  rejectWithValue(e)

  }
})
// delete action
export const deleteUser = createAsyncThunk(
  "deleteUser",
  async (id, { rejectWithValue }) => {
    const response = await fetch(
      `https://6509ea4ff6553137159c3e8d.mockapi.io/crud/${id}`,
      { method: "DELETE" }
    );

    try {
      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
// Update User
export const UpdateUser = createAsyncThunk(
  "UpdateUser",
  async (data, { rejectWithValue }) => {
    const response = await fetch(
      `https://6509ea4ff6553137159c3e8d.mockapi.io/crud/${data.id}`,
      {
        method: "PUT",
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
    searchData:[]
  },
  reducers:{
    searchUser:(state,action)=>{
      state.searchData=action.payload
    }
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
      .addCase(showUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(showUser.fulfilled, (state,action) => {
        state.loading = false;
        state.users=action.payload;
      })
      .addCase(showUser.rejected,(state,action)=>{
        state.loading=false;
        state.error = action.error.message;
      })
      .addCase(deleteUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteUser.fulfilled, (state,action) => {
        state.loading = false;
        const {id} =action.payload
        if(id){
          state.users = state.users.filter((ele)=>ele.id !==id)
        }
      
      })
      .addCase(deleteUser.rejected,(state,action)=>{
        state.loading=false;
        state.error = action.payload;
      })
      .addCase(UpdateUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(UpdateUser.fulfilled, (state,action) => {
        state.loading = false;
        state.users=state.users.map((ele)=>(ele.id ===action.payload.id ? action.payload: ele))
      })
      .addCase(UpdateUser.rejected,(state,action)=>{
        state.loading=false;
        state.error = action.error.message;
      })
  },
});
export default userDetail.reducer;
export const {searchUser}=userDetail.actions
