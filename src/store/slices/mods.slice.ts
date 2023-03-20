import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { IMod } from '@/shared/types/curseforge.types'

interface IModsState {
	mods: IMod[]
}

const initialState: IModsState = {
	mods: [],
}

const modsSlice = createSlice({
	name: 'mods',
	initialState,
	reducers: {
		setMods: (state, action: PayloadAction<IMod[]>) => {
			state.mods = action.payload
		},
	},
})

export const modsReducer = modsSlice.reducer
export const modsActions = modsSlice.actions
