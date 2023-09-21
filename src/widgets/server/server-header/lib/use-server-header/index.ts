'use client'

import { useParams, usePathname, useRouter } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'

import { $server, getServerFx, startFx, stopFx } from '@/entities/server/store'

export function useServerHeader() {
	const router = useRouter()
	const params = useParams()
	const pathname = usePathname()

	const [isModalOpen, setIsModalOpen] = useState(false)
	const { server, isLoading } = $server.getState()

	const handleModalOpen = useCallback(() => setIsModalOpen(true), [server])

	const handleModalClose = useCallback(() => setIsModalOpen(false), [server])

	const handleGoBack = useCallback(() => {
		router.back()
	}, [server])

	const handleStopServer = useCallback(() => {
		if (server && !isLoading) {
			stopFx({ gameServerHash: server.gameServerHash })
		}
	}, [server])

	const handleStartServer = useCallback(() => {
		if (server && !isLoading) {
			startFx({ gameServerHash: server.gameServerHash })
		}
	}, [server])

	const handleSubmitCart = useCallback(() => {
		handleModalClose()
		//get from zustand store
		//submitCart()
	}, [server])

	const handleResetCart = useCallback(() => {
		handleModalClose()
		//get from zustand store
		//resetCart()
	}, [server])

	useEffect(() => {
		if (params && params.serverHash !== undefined) {
			getServerFx({ gameServerHash: String(params.serverHash) })
		}
	}, [pathname])

	return {
		server,
		isLoading,
		isModalOpen,
		functions: {
			handleModalOpen,
			handleModalClose,
			handleGoBack,
			handleStartServer,
			handleStopServer,
			handleSubmitCart,
			handleResetCart,
		},
	}
}
