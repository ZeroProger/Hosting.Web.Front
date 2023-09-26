import { useSearchParams as useNextSearchParams } from 'next/navigation'
import React from 'react'

// export function createSearchParams(obj?: Object) {
// 	return new URLSearchParams()
// }

export function useSearchParams(defaultInit?: Object) {
	let search = useNextSearchParams()

	let searchParams = React.useMemo(() => {
		let result: Record<string, string> = {}

		search.forEach((value, key) => {
			result[key] = value
		})

		return result
	}, [search])

	return searchParams
}
