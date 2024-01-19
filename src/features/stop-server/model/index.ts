import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useStore } from 'effector-react'

import { ReactQueryKeys } from '@/shared/lib/react-query'
import { $serverHash } from '@/shared/store'

import { stopServer } from '../api'

export function useStopServerMutation() {
	const serverHash = useStore($serverHash)
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: stopServer,
		onSettled: async (response, error) => {
			if (response?.success) {
				await queryClient.invalidateQueries([ReactQueryKeys.server])
				await queryClient.invalidateQueries([ReactQueryKeys.serverMainInfo, serverHash])
			}
		},
	})
}
