import { serverConsole } from '@/shared/$fake-data$/server.data'

export function getServerConsole(serverHash: string) {
	console.log('polling serverConsole...')
	const c = Math.floor(Math.random() * serverConsole.length)
	return serverConsole.concat(serverConsole.slice(0, c))
}

export async function sendCommandToServerConsole(serverHash: string, command: string) {
	console.log(`API: send command \"${command}\" to server ${serverHash}`)
	return
}
