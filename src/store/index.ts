import { configureStore } from '@reduxjs/toolkit'
import { reducer as toastrReducer } from 'react-redux-toastr'

import { serverReducer } from './slices/server.slice'

export const store = configureStore({
	reducer: {
		serverReducer,
		toastr: toastrReducer,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
