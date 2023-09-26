import { useQuery } from '@tanstack/react-query'

import { IServerActivePlayersRequest } from '@/entities/server/types/requests'

import { ServerUrls } from '@/shared/routes/urls'

import { getActivePlayers } from '../../api'

//#TODO переделать на пуллинг
export function useServerActivePlayers({ gameServerHash }: IServerActivePlayersRequest) {
	return useQuery({
		queryKey: [ServerUrls.server.players(gameServerHash), gameServerHash],
		queryFn: () => getActivePlayers(gameServerHash),
	})
}
