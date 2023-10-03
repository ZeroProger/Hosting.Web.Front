import { createEvent, createStore } from 'effector'

import { IMod } from '@/shared/api/curse-forge'

export const addModToCart = createEvent<IMod>()
export const removeModFromCart = createEvent<IMod>()
export const clearModsCart = createEvent()

export const $modsCart = createStore<IMod[]>([])
	.on(addModToCart, (state, mod) => [...state, mod])
	.on(removeModFromCart, (state, mod) => state.filter((m) => m.id !== mod.id))
	.reset(clearModsCart)
