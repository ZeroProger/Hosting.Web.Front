import {
	serverConsole,
	serverCurrentUsage,
	serverMainInfo,
	serverProperties,
} from 'fakeData/server.data'
import { serverActivePlayers } from 'fakeData/users.data'

import {
	IServerCreateRequest,
	IServerCreateResponse,
	IServerGetActivePlayersRequest,
	IServerGetListRequest,
	IServerGetListResponse,
	IServerGetServerConsoleRequest,
	IServerGetServerCurrentUsageRequest,
	IServerGetServerMainInfoRequest,
	IServerGetServerPropertiesRequest,
	IServerRemoveRequest,
	IServerRemoveResponse,
	IServerStartContainerRequest,
	IServerStartContainerResponse,
	IServerStartRequest,
	IServerStartResponse,
	IServerStopContainerRequest,
	IServerStopContainerResponse,
	IServerStopRequest,
	IServerStopResponse,
	IServerUpdateRequest,
	IServerUpdateResponse,
} from '@/shared/types/requests/server-requests.types'
import { IServer } from '@/shared/types/server.types'

import {
	getCreateServerUrl,
	getRemoveServerUrl,
	getServersUrl,
	getStartGameServerUrl,
	getStartServerContainerUrl,
	getStopGameServerUrl,
	getStopServerContainerUrl,
	getUpdateServerUrl,
} from '@/config/api/servers-api.config'

import { axiosAuth } from '@/api/interceptors'

export const ServerService = {
	compositor: {
		createServer(data: IServerCreateRequest) {
			return axiosAuth().post<IServerCreateResponse>(getCreateServerUrl(), data)
		},

		getServerByHash(hash: string) {
			return axiosAuth().post<IServer>(getServersUrl(hash))
			// return {
			// 	name: uuid
			// 		.split('-')
			// 		.map((w) => capitalize(w))
			// 		.join(' '),
			// 	uuid: uuid,
			// 	ip: `${uuid}.simplehost.ru`,
			// 	dynamicIp: 'dynY6ZHOK.simplehost.cloud:10305',
			// 	software: {
			// 		id: '2',
			// 		name: 'Fabric',
			// 		slug: 'fabric',
			// 	},
			// 	version: {
			// 		name: '1.19.2',
			// 	},
			// 	online: true,
			// 	activePlayers: serverActivePlayers,
			// 	mainInfo: serverMainInfo,
			// 	console: serverConsole,
			// 	usage: serverUsage,
			// 	settings: serverProperties,
			// } as IServer
		},

		getServers(data: IServerGetListRequest) {
			return axiosAuth().post<IServerGetListResponse>(getServersUrl(), data)
		},

		startServerContainer(data: IServerStartContainerRequest) {
			return axiosAuth().post<IServerStartContainerResponse>(getStartServerContainerUrl(), data)
		},

		stopServerContainer(data: IServerStopContainerRequest) {
			return axiosAuth().post<IServerStopContainerResponse>(getStopServerContainerUrl(), data)
		},

		removeServer(data: IServerRemoveRequest) {
			return axiosAuth().post<IServerRemoveResponse>(getRemoveServerUrl(), data)
		},

		updateServer(data: IServerUpdateRequest) {
			return axiosAuth().post<IServerUpdateResponse>(getUpdateServerUrl(), data)
		},
	},
	controller: {
		startGameServer(data: IServerStartRequest) {
			return axiosAuth().post<IServerStartResponse>(getStartGameServerUrl(), data)
		},

		stopGameServer(data: IServerStopRequest) {
			return axiosAuth().post<IServerStopResponse>(getStopGameServerUrl(), data)
		},

		getServerActivePlayers(data: IServerGetActivePlayersRequest) {
			return serverActivePlayers
		},

		getServerCurrentUsage(data: IServerGetServerCurrentUsageRequest) {
			return serverCurrentUsage
		},

		getServerConsole(data: IServerGetServerConsoleRequest) {
			return serverConsole
		},

		getServerMainInfo(data: IServerGetServerMainInfoRequest) {
			return serverMainInfo
		},

		getServerProperties(data: IServerGetServerPropertiesRequest) {
			return serverProperties
		},
	},
}
