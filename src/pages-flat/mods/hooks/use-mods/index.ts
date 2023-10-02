import { useRef, useState } from 'react'

import { useClickOutside, useLocalStorage } from '@/shared/hooks'

export function useMods() {
	const [classesOpen, setClassesOpen] = useState(false)
	const [classesExpanded, setClassesExpanded] = useState(false)

	const classesRef = useRef(null)

	const handleClassesOpen = () => {
		setClassesOpen((prev) => !prev)
	}

	const handleClickOutside = () => {
		setClassesOpen(false)
	}

	const handleClassesExpand = () => {
		setClassesExpanded(true)
	}

	useClickOutside(classesRef, handleClickOutside)

	return {
		classesOpen,
		classesExpanded,
		classesRef,
		functions: { handleClassesOpen, handleClassesExpand },
	}
}
