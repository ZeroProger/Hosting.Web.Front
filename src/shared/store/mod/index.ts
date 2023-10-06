import { createEvent, createStore } from 'effector'

import { IMod } from '@/shared/api/curse-forge'

export const addModToCart = createEvent<IMod>()
export const removeModFromCart = createEvent<IMod>()
export const clearModsCart = createEvent()

const modsFromLS = JSON.parse(localStorage.getItem('mods') || '[]') as IMod[]

export const $modsCart = createStore<IMod[]>(modsFromLS || [])
	.on(addModToCart, (state, mod) => {
		const updatedMods = [...state, mod]
		localStorage.setItem('mods', JSON.stringify(updatedMods))
		return updatedMods
	})
	.on(removeModFromCart, (state, mod) => {
		const updatedMods = state.filter((m) => m.id !== mod.id)
		localStorage.setItem('mods', JSON.stringify(updatedMods))
		return updatedMods
	})
	.reset(clearModsCart)
