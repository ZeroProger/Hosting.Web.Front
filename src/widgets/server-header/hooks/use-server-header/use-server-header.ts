'use client'

import { useRouter } from 'next/navigation'
import { useCallback, useState } from 'react'

export function useServerHeader() {
	const router = useRouter()

	const [isModalOpen, setIsModalOpen] = useState(false)

	const handleModalOpen = useCallback(() => setIsModalOpen(true), [])

	const handleModalClose = useCallback(() => setIsModalOpen(false), [])

	const handleGoBack = useCallback(() => {
		router.back()
	}, [])

	const handleSubmitCart = useCallback(() => {
		handleModalClose()
		//get from zustand store
		//submitCart()
	}, [])

	const handleResetCart = useCallback(() => {
		handleModalClose()
		//get from zustand store
		//resetCart()
	}, [])

	return {
		isModalOpen,
		functions: {
			handleModalOpen,
			handleModalClose,
			handleGoBack,
			handleSubmitCart,
			handleResetCart,
		},
	}
}
