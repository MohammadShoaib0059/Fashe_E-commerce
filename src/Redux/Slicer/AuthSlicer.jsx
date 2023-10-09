import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const PostUser = createAsyncThunk("user/post", async (values) => {
  const response = await fetch(`http://localhost:3000/posts`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      username: values.username,
      email: values.email,
      password: values.password,
      confirm_password: values.confirm_password,
    }),
  });
  const data = await response.json();
  return data;
});

export const GetUser = createAsyncThunk("user/get", async () => {
  const res = await fetch('http://localhost:3000/posts');
  const user = await res.json();
  return user;
});
const initialState = {
  Sign_up: [],
  Sign_In: [],
  loading: false,
  error: "",
};
const AuthSlicer = createSlice({
  name: "user",
  initialState,
  extraReducers: {
    [PostUser.pending]: (state, action) => {
      state.loading = true;
    },
    [PostUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.Sign_up = action.payload;
    },
    [PostUser.rejected]: (state, action) => {
      state.loading = false;
    },
    [GetUser.pending]: (state, action) => {
      state.loading = true;
    },
    [GetUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.Sign_In = action.payload;
    },
    [GetUser.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});
export default AuthSlicer.reducer;
