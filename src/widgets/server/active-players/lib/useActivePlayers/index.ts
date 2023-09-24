import { useQuery } from 'react-query'
import { ServerService } from 'services-temp/server-service'

import { IServerActivePlayersRequest } from '@/entities/server/types/requests'

export function useActivePlayers({ gameServerHash }: IServerActivePlayersRequest) {
	return useQuery(['activePlayers', gameServerHash], () =>
		ServerService.activePlayers({ gameServerHash })
	)
}
