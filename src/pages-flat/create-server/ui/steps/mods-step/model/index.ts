import { createEvent, createStore } from 'effector'

import { IMod } from '@/shared/api/curse-forge'

export const selectMod = createEvent<IMod>()
export const deselectMod = createEvent<IMod>()

export const $selectedMods = createStore<IMod[]>([])
	.on(selectMod, (state, mod) => [...state, mod])
	.on(deselectMod, (state, mod) => state.filter((m) => m.id !== mod.id))
