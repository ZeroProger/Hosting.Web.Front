import { players } from '@/shared/$fake-data$/players.data'

export async function getBannedPlayers(gameServerHash: string) {
	return players
}
