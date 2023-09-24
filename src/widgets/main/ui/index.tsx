'use client'

import { usePathname } from 'next/navigation'

import { cn } from '@/shared/lib/utils'
import { CommonUrls } from '@/shared/routes/urls'

export function Main({ children }: { children: React.ReactNode }) {
	const pathname = usePathname()
	const isHomePage = pathname === CommonUrls.home()

	return (
		<main
			className={cn('flex-auto', {
				'content-container p-layout-sm sm:p-layout': !isHomePage,
			})}
		>
			{children}
		</main>
	)
}
