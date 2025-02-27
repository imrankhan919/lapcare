import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import complaintService from "./complaintService";

const complaintSlice = createSlice({
  name: "complaint",
  initialState: {
    complaints: [],
    singleComplaint: {},
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getComplaints.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(getComplaints.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.complaints = action.payload;
        state.isError = false;
      })
      .addCase(getComplaints.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getComplaint.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(getComplaint.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.singleComplaint = action.payload;
        state.isError = false;
      })
      .addCase(getComplaint.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export default complaintSlice.reducer;

// GET COMPLAINTS
export const getComplaints = createAsyncThunk(
  "FETCH/COMPLAINTS",
  async (_, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token;
    try {
      return await complaintService.fetchComplaints(token);
    } catch (error) {
      const message = error.response.data.msg;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// GET COMPLAINT
export const getComplaint = createAsyncThunk(
  "FETCH/COMPLAINT",
  async (id, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token;
    try {
      return await complaintService.fetchComplaint(id, token);
    } catch (error) {
      const message = error.response.data.msg;
      return thunkAPI.rejectWithValue(message);
    }
  }
);
