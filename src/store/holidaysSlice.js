import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { URI_API } from "../const/const";

export const fetchHolidays = createAsyncThunk(
  'holidays/fetchHolidays', 
  async () => {
    const res = await fetch(URI_API);
    const data = await res.json();
    return data;
  }
)

const holydaysSlice = createSlice({
  name: 'holidays',
  initialState: {
    holidays: {},
    holiday: '',
    loading: '',
  },
  reducers: {
    setHoliday(state, action) {
      state.holiday = action.payload;
    }
  },
  extraReducers: {
    [fetchHolidays.pending]: (state, action) => { 
      state.loading = 'loading';
    },
    [fetchHolidays.fulfilled]: (state, action) => {
      state.loading = 'success';
      state.holidays = action.payload;
    },
    [fetchHolidays.rejected]: (state, action) => { 
      state.loading = 'failed';
      state.holidays = {};
    },
  }
});

export const { setHoliday } = holydaysSlice.actions;

export default holydaysSlice.reducer;