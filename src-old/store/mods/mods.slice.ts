import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { IMod } from '@/shared/types/curseforge.types'

import { getLocalStorageData } from '@/utils/localStorage/localStorage'

import { IInitialState } from './mods.interface'

const initialState: IInitialState = {
	cart: getLocalStorageData('modsCart') || [],
	favorites: [],
}

const modsSlice = createSlice({
	name: 'mods',
	initialState,
	reducers: {
		addModToCart: (state, { payload }: PayloadAction<IMod>) => {
			state.cart = [...state.cart, payload]
			localStorage.setItem('modsCart', JSON.stringify(state.cart))
		},
		removeModFromCart: (state, { payload }: PayloadAction<IMod>) => {
			state.cart = state.cart.filter((mod) => mod.id !== payload.id)
			localStorage.setItem('modsCart', JSON.stringify(state.cart))
		},
		resetCart: (state) => {
			state.cart = []
			localStorage.setItem('modsCart', JSON.stringify(state.cart))
		},
		submitCart: (state) => {
			console.log('submitCart')
			state.cart = []
			localStorage.setItem('modsCart', JSON.stringify(state.cart))
		},
	},
})

export const modsReducer = modsSlice.reducer
export const modsActions = modsSlice.actions
