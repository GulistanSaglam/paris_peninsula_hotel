import { createSlice } from '@reduxjs/toolkit'

export const peninsulaHSlice = createSlice({
    name:'peninsulaH',
    initialState: {
        value: 1,
        length: 6,
        data:[],
        isLoading: false,
        error: false,
    },

    reducers: {
        nextSlide(state, action){
            state.value = action.payload > state.length ? 1 : action.payload;
        },
        prevSlide(state, action) {
            state.value = action.payload < 1 ? state.length : action.payload;
        },
        numSlide(state,action) {
            const slide = action.payload;
            state.value = slide;
        }
    },
});

export const {nextSlide, prevSlide, numSlide} = peninsulaHSlice.actions;
export default peninsulaHSlice.reducer;

