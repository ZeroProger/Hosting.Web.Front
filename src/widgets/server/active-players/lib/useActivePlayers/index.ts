import { useQuery } from 'react-query'

import { IServerActivePlayersRequest } from '@/entities/server/types/requests'

import { ServerUrls } from '@/shared/routes/urls'

import { getActivePlayers } from '../../api'

export function useActivePlayers({ gameServerHash }: IServerActivePlayersRequest) {
	return useQuery([ServerUrls.server.players(gameServerHash), gameServerHash], () =>
		getActivePlayers(gameServerHash)
	)
}
