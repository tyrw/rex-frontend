import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import playerReducer from '../features/audioPlayer/audioPlayerSlice'

export const store = configureStore({
  reducer: {
    player: playerReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
