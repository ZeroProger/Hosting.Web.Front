import { createEvent, createStore } from 'effector'

import { IMod } from '@/shared/api/curse-forge'

export const addModToCart = createEvent<IMod>()
export const removeModFromCart = createEvent<IMod>()
export const clearModsCart = createEvent()

const modsCartLSKey = 'mods-cart'
const modsFromLS = JSON.parse(localStorage.getItem(modsCartLSKey) || '[]') as IMod[]

export const $modsCart = createStore<IMod[]>(modsFromLS || [])
	.on(addModToCart, (state, mod) => {
		const updatedMods = [...state, mod]
		localStorage.setItem(modsCartLSKey, JSON.stringify(updatedMods))
		return updatedMods
	})
	.on(removeModFromCart, (state, mod) => {
		const updatedMods = state.filter((m) => m.id !== mod.id)
		localStorage.setItem(modsCartLSKey, JSON.stringify(updatedMods))
		return updatedMods
	})
	.on(clearModsCart, () => {
		localStorage.removeItem(modsCartLSKey)
		return []
	})
