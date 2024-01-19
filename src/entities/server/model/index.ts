import { useStore } from 'effector-react'

import { useFetchServer } from '@/shared/queries/server'
import { $serverHash } from '@/shared/store'
import { IServer, IServerMainInfo } from '@/shared/types'

import { useFetchServerMainInfo } from '../queries'

export function useServerMainInfo(): {
	mainInfo: IServerMainInfo | null
	onlinePlayers: string[]
	isLoading: boolean
} {
	const serverHash = useStore($serverHash)

	const { data: server } = useFetchServer(serverHash)
	const { data: mainInfo, isLoading } = useFetchServerMainInfo()

	console.log('useServerMainInfo:', mainInfo)

	if (mainInfo === undefined || (server && !server.isOnline)) {
		return {
			mainInfo: null,
			onlinePlayers: [],
			isLoading: false,
		}
	}

	return {
		mainInfo: {
			ip: getServerFullAddress(server),
			playersCount: mainInfo.properties.numplayers,
			maxPlayers: mainInfo.properties.maxplayers,
			version: mainInfo.properties.version,
			map: mainInfo.properties.map,
			software: null,
		},
		onlinePlayers: mainInfo.onlinePlayers,
		isLoading,
	}
}

const getServerFullAddress = (server?: IServer) => {
	const controllerPort = server?.serverPorts.find((port) => port.portKind === 'controller')

	const serverPort = server?.serverPorts.find((port) => port.port !== controllerPort?.port)

	return `${server?.serverIp}:${serverPort?.port}`
}
