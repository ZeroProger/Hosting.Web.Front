import { configureStore } from '@reduxjs/toolkit'

import { serverReducer } from './slices/server.slice'

export const store = configureStore({
	reducer: {
		serverReducer,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
