import { createEvent, createStore } from 'effector'

export interface HeaderMenuStore {
	isHeaderMenuOpen: boolean
}

export const open = createEvent()
export const close = createEvent()
export const toggle = createEvent()

export const $headerMenu = createStore<HeaderMenuStore>({ isHeaderMenuOpen: false })
	.on(open, () => ({ isHeaderMenuOpen: true }))
	.on(close, () => ({ isHeaderMenuOpen: false }))
	.on(toggle, (state) => ({ isHeaderMenuOpen: !state.isHeaderMenuOpen }))
