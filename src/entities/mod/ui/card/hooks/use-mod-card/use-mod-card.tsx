import { useCallback, useState } from 'react'

import { IMod } from '@/shared/api/curse-forge'
import { modClassesMap } from '@/shared/config/mods'
import { formatModDate, formatModDownloadsCount } from '@/shared/utils/format'

export function useModCard(mod: IMod) {
	const [isHover, setIsHover] = useState(false)

	const formattedDownloadsCount = formatModDownloadsCount(mod.downloadCount)

	const formattedUpdateDate = formatModDate(mod.dateModified)

	const classTagName = modClassesMap.get(mod.classId)

	const handleAddModClick = useCallback(() => {
		//#TODO: add mod to cart
		console.log(`add mod ${mod.id} to cart`)
	}, [mod.id])

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
		isHover,
		formattedDownloadsCount,
		formattedUpdateDate,
		classTagName,
		functions: {
			handleAddModClick,
			handleMouseOver,
			handleMouseOut,
			handleCardClick,
		},
	}
}
