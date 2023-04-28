import { useEffect, useRef, useState } from 'react'

export default function useOutside(initialIsVisible: boolean) {
	const [isFocused, setIsFocused] = useState(initialIsVisible)
	const ref = useRef<HTMLInputElement>(null)

	const handleClickOutside = (e: MouseEvent) => {
		if (ref.current && !ref.current.contains(e.target as Node)) setIsFocused(false)
	}

	useEffect(() => {
		document.addEventListener('click', handleClickOutside, true)
		return () => {
			document.removeEventListener('click', handleClickOutside, true)
		}
	}, [])
	return { ref, isFocused, setIsFocused }
}
