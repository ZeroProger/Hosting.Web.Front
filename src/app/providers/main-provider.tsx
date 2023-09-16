'use client'

import { QueryClientProvider } from 'react-query'

import { queryClient } from '@/shared/lib/react-query'
import { ToastifyContainer } from '@/shared/lib/react-toastify'

import { ThemeProvider } from './theme-provider'

/**
 * @param {React.ReactNode}  children - вставляется внутрь всех провайдеров.
 * @returns {JSX.Element} Обертка содержащая в себе все провайдеры
 */
export function MainProvider({ children }: { children: React.ReactNode }) {
	return (
		<ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
			<QueryClientProvider client={queryClient}>
				{children}
				<ToastifyContainer />
			</QueryClientProvider>
		</ThemeProvider>
	)
}
