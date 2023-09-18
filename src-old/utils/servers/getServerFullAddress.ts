import { IServer } from '@/shared/types/server.types'

export const getServerFullAddress = (server: IServer) => {
	if (server.serverPorts.length === 0) return null

	const controllerPort = server.serverPorts.find((port) => port.portKind === 'controller')

	if (!controllerPort) return null

	const gameServerPort = server.serverPorts.find((port) => port.port !== controllerPort?.port)

	if (!gameServerPort) return null

	return `${server.serverIp}:${gameServerPort.port}`
}
