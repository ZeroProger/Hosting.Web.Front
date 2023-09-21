import { create } from 'zustand'

import { Player } from '../types'

export interface PlayerState {
	players: Player[]
}

export interface PlayerActions {
	add: () => void
	delete: () => void
	kick: () => void
	ban: () => void
}

export const usePlayers = create<PlayerState & PlayerActions>((set) => ({
	players: [],
	async add() {},
	async delete() {},
	async ban() {},
	async unban() {},
	async kick() {},
	async giveRole() {},
}))
