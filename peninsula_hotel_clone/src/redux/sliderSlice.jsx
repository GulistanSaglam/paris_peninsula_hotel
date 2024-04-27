import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'

export const fetchRoom = createAsyncThunk("fetchRoom", async () => {
    const data = await fetch('http://localhost:3000/roomsuites')
    return data.json()
})

export const sliderSlice = createSlice({
    name: 'slider',
    initialState: {
        value: 0,
        length: 7,
        data:[],
        isLoading: false,
        error: false,
    },

    reducers: {
        nextSlide(state, action){
            // console.log("action", action.payload);
            // console.log("state", state);
            state.value = action.payload > state.length ? 0 : action.payload;
        },
        prevSlide(state, action){
            state.value = action.payload < 0 ? state.length : action.payload;
        },
        dotSlide(state, action){
            const slide = action.payload;
            state.value = slide;
            // console.log("dot", slide);
        },
    },

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
    }

});

export const {nextSlide, prevSlide, dotSlide} = sliderSlice.actions;
export default sliderSlice.reducer;