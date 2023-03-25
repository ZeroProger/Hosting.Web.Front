import { configureStore } from '@reduxjs/toolkit'

import { modsReducer } from './slices/mods.slice'
import { serverReducer } from './slices/server.slice'

export const store = configureStore({
	reducer: {
		serverReducer,
		modsReducer,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
