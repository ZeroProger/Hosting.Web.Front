import { createEvent, createStore } from 'effector'

export const setServerHashFx = createEvent<string>()

export const resetServerHashFx = createEvent()

export const $serverHash = createStore<string | undefined | null>(null)
	.on(setServerHashFx, (_, serverHash) => serverHash)
	.reset(resetServerHashFx)
