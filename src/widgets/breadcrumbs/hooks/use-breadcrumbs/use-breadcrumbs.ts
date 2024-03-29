import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import { ModUrls, ServerUrls } from '@/shared/routes/urls'

import { ModPathPart, PathPart, ServerPathPart } from '../../types'

export function useBreadcrumbs() {
	const pathname = usePathname()

	const [pathParts, setPathParts] = useState<PathPart[]>([])

	function isModPathPart(property: PathPart): property is ModPathPart {
		return Object.hasOwn(ModUrls, property)
	}

	function isVersionPathPart(value: ServerPathPart): value is 'version' | 'versions' {
		const method = ServerUrls.server[value]

		return method.name === 'version' || method.name === 'versions'
	}

	useEffect(() => {
		const slicedParts = pathname.includes('overview')
			? (pathname.split('/').slice(4) as PathPart[])
			: (pathname.split('/').slice(3) as PathPart[])

		setPathParts(slicedParts)
	}, [pathname])

	return { pathParts, functions: { isModPathPart, isVersionPathPart } }
}
