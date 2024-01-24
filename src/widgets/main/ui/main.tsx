'use client'

import { redirect, usePathname } from 'next/navigation'
import { useEffect } from 'react'

import { PrivateRoutes } from '@/app/config/private-routes'

import { useAuth } from '@/entities/auth'

import { cn } from '@/shared/lib/utils'
import { AuthUrls, CommonUrls } from '@/shared/routes/urls'

export function Main({ children }: { children: React.ReactNode }) {
	const pathname = usePathname()
	const isHomePage = pathname === CommonUrls.home()

	const { authToken } = useAuth()

	useEffect(() => {
		if (!authToken) {
			PrivateRoutes.forEach((path) => {
				if (pathname.startsWith(path)) {
					redirect(AuthUrls.signIn())
				}
			})
		}
	}, [authToken, pathname])

	return (
		<main
			className={cn('flex-auto', {
				'content-container p-layout-sm sm:p-layout pt-header-sm sm:pt-header': !isHomePage,
			})}
		>
			{children}
		</main>
	)
}
