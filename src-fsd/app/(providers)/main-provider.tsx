import { QueryClientProvider } from 'react-query'

import { queryClient } from '@/shared/lib/react-query'
import { ToastifyContainer } from '@/shared/lib/react-toastify'

export function MainProvider({ children }: { children: React.ReactNode }) {
	return (
		<QueryClientProvider client={queryClient}>
			{children}
			<ToastifyContainer />
		</QueryClientProvider>
	)
}
