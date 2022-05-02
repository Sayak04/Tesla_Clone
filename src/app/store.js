import { configureStore } from '@reduxjs/toolkit';
import CarSlice from '../features/Car/CarSlice';


export const store = configureStore({
  reducer: {
    car:CarSlice
  },
});
