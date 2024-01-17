import { axiosAuth } from '@/shared/api/auth'
import { ServerApiUrls } from '@/shared/api/urls'

export function kickPlayer(gameServerHash: string, playerNickname: string) {
	const postSystem = 'rcon'
	const message = `/kick ${playerNickname}`

	return axiosAuth().post<{ response: string; error: string; success: boolean }>(
		ServerApiUrls.sendCommand(),
		{
			gameServerHash,
			message,
			postSystem,
		}
	)
}
