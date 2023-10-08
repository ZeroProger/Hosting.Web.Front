import { useStore } from 'effector-react'
import { useState } from 'react'

import { IMod } from '@/shared/api/curse-forge'
import { modClassesMap } from '@/shared/config/mods'
import { useDebounce } from '@/shared/hooks'
import { $modsCart } from '@/shared/store/mod'
import { formatModDate, formatModDownloadsCount } from '@/shared/utils/format'

export function useModCard(mod: IMod) {
	const [isHover, setIsHover] = useState(false)
	const debouncedHover = useDebounce(isHover, 200)

	const formattedDownloadsCount = formatModDownloadsCount(mod.downloadCount)
	const formattedUpdateDate = formatModDate(mod.dateModified)
	const classTagName = modClassesMap.get(mod.classId)

	const modsCart = useStore($modsCart)
	const isModInCart = modsCart.some((m) => m.id === mod.id)

	const handleMouseOver = () => {
		setIsHover(true)
	}

	const handleMouseOut = () => {
		setIsHover(false)
	}

	const handleCardClick = (event: any) => {
		if (
			event.target.nodeName === 'BUTTON' ||
			event.target.nodeName === 'path' ||
			event.target.nodeName === 'svg' ||
			event.target.nodeName === 'circle'
		) {
			event.preventDefault()
			return
		}
	}

	return {
		isHover: debouncedHover,
		isModInCart,
		formattedDownloadsCount,
		formattedUpdateDate,
		classTagName,
		functions: {
			handleMouseOver,
			handleMouseOut,
			handleCardClick,
		},
	}
}
