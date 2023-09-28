import { serverConsole } from '@/shared/$fake-data$/server.data'

export function getServerConsole(serverHash: string) {
	return serverConsole
}

export async function sendCommandToServerConsole(serverHash: string, command: string) {
	console.log(`API: send command \"${command}\" to server ${serverHash}`)
	return
}
