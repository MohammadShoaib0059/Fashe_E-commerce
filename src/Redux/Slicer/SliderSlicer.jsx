import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const sliderItems = createAsyncThunk("Slider/sliderItems", async () => {
    const res = await fetch("http://localhost:3000/sliderItems");
    const data = await res.json();
    return data;
  });

  const initialState = {
    sliderdata: [],
  };
  const SliderSlicer = createSlice({
    name: "Slider",
    initialState,

    extraReducers: {
        [sliderItems.pending]: (state, action) => {
          state.loading = true;
        },
        [sliderItems.fulfilled]: (state, action) => {
          state.loading = false;
          state.sliderdata = action.payload;
        },
        [sliderItems.rejected]: (state, action) => {
          state.loading = false;
        },
      },
  });
  export default SliderSlicer.reducer;