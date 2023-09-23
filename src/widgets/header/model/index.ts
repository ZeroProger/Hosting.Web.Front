import { createEffect, createEvent, createStore } from 'effector'

import { servers } from '@/shared/$fake-data$/server.data'
import { IServer } from '@/shared/types'

export const openHeaderMenu = createEvent()
export const closeHeaderMenu = createEvent()
export const toggleHeaderMenu = createEvent()

export const $headerMenu = createStore<{ isHeaderMenuOpen: boolean }>({ isHeaderMenuOpen: false })
	.on(openHeaderMenu, () => ({ isHeaderMenuOpen: true }))
	.on(closeHeaderMenu, () => ({ isHeaderMenuOpen: false }))
	.on(toggleHeaderMenu, (state) => ({ isHeaderMenuOpen: !state.isHeaderMenuOpen }))

export const getUserServersFx = createEffect(async () => servers)

export const $pendingUserServers = getUserServersFx.pending

export const $userServers = createStore<IServer[]>([]).on(
	getUserServersFx.doneData,
	(_, userServers) => userServers
)
