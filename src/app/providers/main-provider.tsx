'use client'

import { QueryClientProvider } from 'react-query'

import { queryClient } from '@/shared/lib/react-query'
import { ToastifyContainer } from '@/shared/lib/react-toastify'

/**
 * @param {React.ReactNode}  children - вставляется внутрь всех провайдеров.
 * @returns {JSX.Element} Обертка содержащая в себе все провайдеры
 */
export function MainProvider({ children }: { children: React.ReactNode }) {
	return (
		<QueryClientProvider client={queryClient}>
			{children}
			<ToastifyContainer />
		</QueryClientProvider>
	)
}
