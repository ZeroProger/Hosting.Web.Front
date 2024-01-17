import { axiosAuth } from '@/shared/api/auth'
import { ServerApiUrls } from '@/shared/api/urls'

export function getServerConsole(serverHash: string) {
	const logs = axiosAuth().post<{
		Logs: {
			Id: number
			Record: string
		}[]
	}>(ServerApiUrls.getServerLogs(), { isLastLogs: false, page: null, gameServerHash: serverHash })

	return logs
}

export async function sendCommandToServerConsole(gameServerHash: string, message: string) {
	const postSystem = 'rcon'

	return axiosAuth().post<{ response: string; error: string; success: boolean }>(
		ServerApiUrls.sendCommand(),
		{
			gameServerHash,
			message,
			postSystem,
		}
	)
}
