import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { IServer } from '@/shared/types/server.types'

interface IServerState {
	server: IServer
}

const initialState = {
	server: {
		name: '',
		uuid: '',
		ip: '',
		dynamicIp: '',
		software: {
			id: '',
			name: '',
			slug: '',
		},
		version: {
			name: '',
		},
		online: false,
		activePlayers: [],
		mainInfo: [],
		console: [],
		usage: [],
		settings: [],
	},
} as IServerState

const serverSlice = createSlice({
	name: 'server',
	initialState,
	reducers: {
		setServer: (state, action: PayloadAction<IServer>) => {
			state.server = action.payload
		},
	},
})

export const serverReducer = serverSlice.reducer
export const serverActions = serverSlice.actions
