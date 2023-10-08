import { useStore } from 'effector-react'
import { useEffect, useState } from 'react'

import { $modsCart } from '@/shared/store/mod'
import { formatModDate, formatModDownloadsCount } from '@/shared/utils/format'

import { useFetchMod, useFetchModDescription } from '../../queries'

export function useModLayout(modId: number) {
	const modsCart = useStore($modsCart)
	const [isModInCart, setIsModInCart] = useState(false)

	const { data: mod, isLoading: modLoading } = useFetchMod(modId)
	const { data: modDescription, isLoading: descriptionLoading } = useFetchModDescription(modId)

	const isLoading = modLoading || descriptionLoading

	const formattedDateCreated = formatModDate(mod?.dateCreated!)
	const formattedDateModified = formatModDate(mod?.dateModified!)

	const formattedDownloadsCount = formatModDownloadsCount(mod?.downloadCount!)

	useEffect(() => {
		setIsModInCart(modsCart.some((m) => m.id === mod?.id))
	}, [modsCart, mod])

	return {
		mod,
		isModInCart,
		isLoading,
		formattedDateCreated,
		formattedDateModified,
		formattedDownloadsCount,
	}
}
