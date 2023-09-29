import { activePlayers } from '@/shared/$fake-data$/players.data'

export function getActivePlayers(gameServerHash: string) {
	console.log('polling serverActivePlayers...')
	return activePlayers
}
