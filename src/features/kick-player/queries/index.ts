import { useMutation } from '@tanstack/react-query'
import { useStore } from 'effector-react'

import { ReactQueryKeys, queryClient } from '@/shared/lib/react-query'
import { $serverHash } from '@/shared/store'

import { kickPlayer } from '../api'

export function useKickPlayerMutation() {
	const serverHash = useStore($serverHash)

	return useMutation({
		mutationFn: kickPlayer,
		onSuccess: () =>
			queryClient.invalidateQueries({ queryKey: [ReactQueryKeys.serverActivePlayers, serverHash] }),
	})
}
