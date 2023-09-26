import { useQuery } from '@tanstack/react-query'

import { ReactQueryKeys } from '@/shared/lib/react-query'

import { getOperators } from '../api'

export function useOperators(gameServerHash: string) {
	const { data: operators, isLoading } = useQuery({
		queryKey: [ReactQueryKeys.operators, gameServerHash],
		queryFn: () => getOperators(gameServerHash),
	})

	return { operators, isLoading }
}
