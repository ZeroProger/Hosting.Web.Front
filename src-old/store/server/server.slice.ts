import { createSlice } from '@reduxjs/toolkit'

import { getServer, startServer, stopServer } from './server.actions'
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
			.addCase(startServer.pending, (state) => {
				state.isLoading = true
			})
			.addCase(startServer.fulfilled, (state) => {
				state.isLoading = false
			})
			.addCase(startServer.rejected, (state) => {
				state.isLoading = false
			})
			.addCase(stopServer.pending, (state) => {
				state.isLoading = true
			})
			.addCase(stopServer.fulfilled, (state) => {
				state.isLoading = false
			})
			.addCase(stopServer.rejected, (state) => {
				state.isLoading = false
			})
	},
})

export const serverReducer = serverSlice.reducer
export const serverActions = serverSlice.actions
