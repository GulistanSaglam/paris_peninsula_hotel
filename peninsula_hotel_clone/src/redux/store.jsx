import { configureStore } from '@reduxjs/toolkit'
import roomReducer from './roomSlicer'
import sliderReducer from './sliderSlice'
import peninsulaHReducer from './peninsulaHSlice'


export const store = configureStore({
   reducer: {
    room: roomReducer,
    slider: sliderReducer,
    peninsulaH: peninsulaHReducer
   } 
})