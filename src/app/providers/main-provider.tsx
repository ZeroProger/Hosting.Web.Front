'use client'

import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { useEffect } from 'react'

import { IS_DEV } from '@/shared/config/common/constants'
import { queryClient } from '@/shared/lib/react-query'
import { ToastifyContainer } from '@/shared/lib/react-toastify'

import { AuthProvider } from './auth-provider'
import { ThemeProvider } from './theme-provider'

/**
 * @param {React.ReactNode}  children - вставляется внутрь всех провайдеров.
 * @returns {JSX.Element} Обертка содержащая в себе все провайдеры
 */
export function MainProvider({ children }: { children: React.ReactNode }) {
	const handleResize = () => {
		const doc = document.documentElement

		doc.style.setProperty('--vh', `${window.innerHeight}px`)
		doc.style.setProperty('--vw', `${window.innerWidth}px`)
	}

	useEffect(() => {
		handleResize()

		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	return (
		<AuthProvider>
			<ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
				<QueryClientProvider client={queryClient}>
					{children}
					<ToastifyContainer />
					{IS_DEV && <ReactQueryDevtools />}
				</QueryClientProvider>
			</ThemeProvider>
		</AuthProvider>
	)
}
