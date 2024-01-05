import { IMod } from '@/shared/api/curse-forge'
import { clearModsCart, removeModFromCart } from '@/shared/store/mod'
import { useCallback, useState } from 'react'

export function useModsCart() {
	const [modalOpen, setModalOpen] = useState(false)

	const handleRemoveModClick = useCallback((mod: IMod) => {
		removeModFromCart(mod)
	}, [])

	const handleModalOpenChange = useCallback((open: boolean) => {
		setModalOpen(open)
	}, [])

	const handleModalClose = useCallback(() => {
		setModalOpen(false)
	}, [])

	const handleSubmitCart = useCallback(() => {
		//api request to install mods from cart
		handleModalClose()
		clearModsCart()
	}, [])

	const handleClearCart = useCallback(() => {
		handleModalClose()
		clearModsCart()
	}, [])

	const handleModLinkClick = useCallback(() => {
		handleModalClose()
	}, [])

	return {
		modalOpen,
		functions: {
			handleRemoveModClick,
			handleModalClose,
			handleModalOpenChange,
			handleSubmitCart,
			handleClearCart,
			handleModLinkClick,
		},
	}
}
