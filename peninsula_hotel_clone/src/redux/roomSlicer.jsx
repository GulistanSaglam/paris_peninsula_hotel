import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'

export const fetchRoom = createAsyncThunk("fetchRoom", async () => {
    const data = await fetch('http://localhost:3000/roomsuites')
    return data.json()
})

export const fetchRoomDetail = createAsyncThunk("fetchRoomDetail", async () => {
    const data = await fetch('http://localhost:3000/roomsuites')
    return data.json()
})

const initialState = {
    data:[],
    isLoading: false,
    error: false,
    roomDetails:[]
};

const roomSlice = createSlice({
    name: 'roomSlice',
    initialState,

    extraReducers: (builder) => {
        builder
       .addCase(fetchRoom.pending, (state,action) => {
            state.isLoading = true
        })
        .addCase(fetchRoom.fulfilled, (state,action) => {
            state.isLoading = false
            state.data = action.payload;
        })
       .addCase(fetchRoom.rejected, (state, action) => {
            state.error = true;
        })

        .addCase(fetchRoomDetail.fulfilled, (state,action) => {
            state.isLoading = false
            state.data = action.payload;
        })
    },
})

export const roomDetails = (state) =>state.roomDetails;
export default roomSlice.reducer;