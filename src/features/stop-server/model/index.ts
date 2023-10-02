import { useMutation, useQueryClient } from '@tanstack/react-query'

import { ReactQueryKeys } from '@/shared/lib/react-query'
import { toastError } from '@/shared/lib/react-toastify'

import { stopServer } from '../api'

export function useStopServerMutation() {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: stopServer,
		onSettled: async (response, error) => {
			if (error === undefined || error === null) {
				toastError(error)
				return
			}

			await queryClient.invalidateQueries([ReactQueryKeys.server])
		},
	})
}
