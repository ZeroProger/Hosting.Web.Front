import { useLayoutEffect, useMemo, useRef } from 'react'

const useEventCallback = (fn: any) => {
	let ref = useRef(fn)
	useLayoutEffect(() => {
		ref.current = fn
	})
	return useMemo(
		() =>
			(...args: any[]) => {
				const { current } = ref
				return current(...args)
			},
		[]
	)
}
export default useEventCallback
