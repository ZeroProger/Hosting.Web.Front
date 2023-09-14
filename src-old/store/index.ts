import { register } from './user/user.actions';
import { configureStore } from '@reduxjs/toolkit'
import { reducers } from './rootReducer'
import { userActions } from './user/user.slice'

export const store = configureStore({
	reducer: reducers,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch