import { bannedUsers } from '@/shared/$fake-data$/players.data'

export function getBannedPlayers(gameServerHash: string) {
	return bannedUsers
}
