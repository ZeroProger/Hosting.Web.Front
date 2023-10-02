'use client'

import { QueryClient, QueryClientConfig } from '@tanstack/react-query'

export const reactQueryConfig: QueryClientConfig = {
	defaultOptions: {
		queries: {
			staleTime: 5 * 60 * 1000,
			cacheTime: 5 * 60 * 1000,
			refetchOnMount: false,
			refetchOnWindowFocus: false,
		},
	},
}

export const queryClient = new QueryClient()
