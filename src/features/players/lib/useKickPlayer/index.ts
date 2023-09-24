import { useMutation } from 'react-query'

import { queryClient } from '@/shared/lib/react-query'

import { kickPlayer } from '../../api'

export function useKickPlayer(gameServerHash: string) {
	return useMutation({
		mutationFn: kickPlayer,
		mutationKey: ['kick', gameServerHash],
		onSuccess: () => queryClient.invalidateQueries({ queryKey: ['activePlayers', gameServerHash] }),
	})
}
