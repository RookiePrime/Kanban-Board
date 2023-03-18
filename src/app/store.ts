import { configureStore } from '@reduxjs/toolkit';
import boardReducer from '../features/board/board-slice';

export const store = configureStore({
    reducer: {
        board: boardReducer
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;