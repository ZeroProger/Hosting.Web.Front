import { createSlice } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'

import { getLocalStorageData } from '@/utils/localStorage/localStorage'

import { login, logout, register } from './user.actions'
import { IInitialState } from './user.interface'

const initialState: IInitialState = {
	user: getLocalStorageData('user'),
	authToken: Cookies.get('authToken') || getLocalStorageData('authToken') || null,
	isLoading: false,
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(register.pending, (state) => {
				state.isLoading = true
			})
			.addCase(register.fulfilled, (state, { payload }) => {
				state.user = payload.user
				state.authToken = payload.authToken
				state.isLoading = false
			})
			.addCase(register.rejected, (state) => {
				state.user = null
				state.authToken = null
				state.isLoading = false
			})
			.addCase(login.pending, (state) => {
				state.isLoading = true
			})
			.addCase(login.fulfilled, (state, { payload }) => {
				state.user = payload.user
				state.authToken = payload.authToken
				state.isLoading = false
			})
			.addCase(login.rejected, (state) => {
				state.user = null
				state.authToken = null
				state.isLoading = false
			})
			.addCase(logout.fulfilled, (state) => {
				state.user = null
				state.authToken = null
				state.isLoading = false
			})
	},
})

export const userReducer = userSlice.reducer
export const userActions = userSlice.actions
