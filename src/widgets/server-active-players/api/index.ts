import { activePlayers } from '@/shared/$fake-data$/players.data'

export function getActivePlayers(gameServerHash: string) {
	return activePlayers.slice(0, 4)
}
