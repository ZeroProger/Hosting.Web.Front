import { activePlayers } from '@/shared/$fake-data$/players.data'

export function getActivePlayers(gameServerHash: string) {
	console.log('polling serverActivePlayers...')
	const c = Math.floor(Math.random() * activePlayers.length - 1)

	return activePlayers.slice(0, c)
}
