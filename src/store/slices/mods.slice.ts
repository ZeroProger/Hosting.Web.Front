import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { IClassOfCategories, IMod } from '@/shared/types/curseforge.types'

interface IModsState {
	mod: IMod
	modDescription: string
	classes: IClassOfCategories[]
	mods: IMod[]
}

const initialState: IModsState = {
	mod: {} as IMod,
	modDescription: '',
	classes: [],
	mods: [],
}

const modsSlice = createSlice({
	name: 'mods',
	initialState,
	reducers: {
		setMod: (state, action: PayloadAction<IMod>) => {
			state.mod = action.payload
		},
		setModDescription: (state, action: PayloadAction<string>) => {
			state.modDescription = action.payload
		},
		setMods: (state, action: PayloadAction<IMod[]>) => {
			state.mods = action.payload
		},
		setClassesWithCategories: (state, action: PayloadAction<IClassOfCategories[]>) => {
			state.classes = action.payload
		},
	},
})

export const modsReducer = modsSlice.reducer
export const modsActions = modsSlice.actions
