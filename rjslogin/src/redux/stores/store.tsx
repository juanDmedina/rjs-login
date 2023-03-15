import {configureStore} from '@reduxjs/toolkit';
import authSlice from '../slices/authSlice';


export const store = configureStore({
  reducer: {
    authentication: authSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
