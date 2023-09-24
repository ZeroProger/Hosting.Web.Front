import { useMutation } from 'react-query'

import { queryClient } from '@/shared/lib/react-query'

import { banPlayer } from '../../api'

export function useBanPlayer(gameServerHash: string) {
	return useMutation({
		mutationFn: banPlayer,
		mutationKey: ['ban', gameServerHash],
		onSuccess: () => queryClient.invalidateQueries({ queryKey: ['activePlayers', gameServerHash] }),
	})
}
