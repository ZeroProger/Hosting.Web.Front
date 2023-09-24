import { players } from '@/shared/$fake-data$/players.data'

export async function getWhitelistPlayers(gameServerHash: string) {
	return players
}
