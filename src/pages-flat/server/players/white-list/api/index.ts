import { whiteListUsers } from '@/shared/$fake-data$/players.data'

export function getWhitelist(gameServerHash: string) {
	return whiteListUsers
}
