import { createSlice } from '@reduxjs/toolkit'

import { getServer } from './server.actions'
import { IInitialState } from './server.interface'

const initialState: IInitialState = {
	server: null,
	isLoading: false,
}

const serverSlice = createSlice({
	name: 'server',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getServer.pending, (state) => {
				state.isLoading = true
			})
			.addCase(getServer.fulfilled, (state, { payload }) => {
				state.server = payload
				state.isLoading = false
			})
			.addCase(getServer.rejected, (state) => {
				state.server = null
				state.isLoading = false
			})
	},
})

export const serverReducer = serverSlice.reducer
export const serverActions = serverSlice.actions
