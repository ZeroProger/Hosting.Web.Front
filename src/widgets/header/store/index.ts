import { create } from 'zustand'

export interface HeaderMenuState {
	isHeaderMenuOpen: boolean
}

export interface HeaderMenuAction {
	openHeaderMenu: () => void
	closeHeaderMenu: () => void
	toggleHeaderMenu: () => void
}

export const useHeaderMenu = create<HeaderMenuState & HeaderMenuAction>((set) => ({
	isHeaderMenuOpen: false,
	openHeaderMenu() {
		set(() => ({ isHeaderMenuOpen: true }))
	},
	closeHeaderMenu() {
		set(() => ({ isHeaderMenuOpen: false }))
	},
	toggleHeaderMenu() {
		set((state) => ({ isHeaderMenuOpen: !state.isHeaderMenuOpen }))
	},
}))
