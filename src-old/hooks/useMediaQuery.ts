import { useEffect, useState } from 'react'
import { IS_CLIENT } from './../config/constants'

function useMediaQuery(query: string): boolean {
	const getMatches = (query: string): boolean => {
		if (IS_CLIENT) {
			return window.matchMedia(query).matches
		}
		return false
	}

	const [matches, setMatches] = useState<boolean>(getMatches(query))

	function handleChange() {
		setMatches(getMatches(query))
	}

	useEffect(() => {
		const matchMedia = window.matchMedia(query)

		handleChange()

		if (matchMedia.addListener) {
			matchMedia.addListener(handleChange)
		} else {
			matchMedia.addEventListener('change', handleChange)
		}

		return () => {
			if (matchMedia.removeListener) {
				matchMedia.removeListener(handleChange)
			} else {
				matchMedia.removeEventListener('change', handleChange)
			}
		}
	}, [query])

	return matches
}

export default useMediaQuery
