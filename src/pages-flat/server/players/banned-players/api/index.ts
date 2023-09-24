import { bannedIps } from '@/shared/$fake-data$/players.data'

export function getBannedPlayers(gameServerHash: string) {
	return bannedIps
}
