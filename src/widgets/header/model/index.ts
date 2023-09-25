import { createEvent, createStore } from 'effector'

export const openHeaderMenu = createEvent()
export const closeHeaderMenu = createEvent()
export const toggleHeaderMenu = createEvent()

export const $headerMenu = createStore<{ isHeaderMenuOpen: boolean }>({ isHeaderMenuOpen: false })
	.on(openHeaderMenu, () => ({ isHeaderMenuOpen: true }))
	.on(closeHeaderMenu, () => ({ isHeaderMenuOpen: false }))
	.on(toggleHeaderMenu, (state) => ({ isHeaderMenuOpen: !state.isHeaderMenuOpen }))
