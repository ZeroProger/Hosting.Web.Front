import { servers } from '@/shared/$fake-data$/server.data'
import { IServer } from '@/shared/types'
import { createEffect, createEvent, createStore } from 'effector'

export const open = createEvent()
export const close = createEvent()
export const toggle = createEvent()

export const $headerMenu = createStore<{ isHeaderMenuOpen: boolean }>({ isHeaderMenuOpen: false })
	.on(open, () => ({ isHeaderMenuOpen: true }))
	.on(close, () => ({ isHeaderMenuOpen: false }))
	.on(toggle, (state) => ({ isHeaderMenuOpen: !state.isHeaderMenuOpen }))

export const getUserServersFx = createEffect(async () => servers)

export const $pendingUserServers = getUserServersFx.pending

export const $userServers = createStore<IServer[]>([]).on(
		getUserServersFx.doneData,
		(_, userServers) => userServers
	)