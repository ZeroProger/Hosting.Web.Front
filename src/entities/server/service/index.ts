// import { serverActivePlayers } from 'fakeData/users.data'
import { axiosAuth } from '@/shared/api/auth'

import {
	getCreateServerUrl,
	getRemoveServerUrl,
	getServersUrl,
	getStartGameServerUrl,
	getStartServerUrl,
	getStopGameServerUrl,
	getStopServerUrl,
	getUpdateServerUrl,
} from '../config/api'
import { serverConsole, serverCurrentUsage, serverMainInfo, serverProperties } from '../fakeData'
import { Server } from '../types'
import {
	ServerConsoleRequest,
	ServerCreateRequest,
	ServerCreateResponse,
	ServerCurrentUsageRequest,
	ServerListRequest,
	ServerListResponse,
	ServerMainInfoRequest,
	ServerPropertiesRequest,
	ServerRemoveRequest,
	ServerRemoveResponse,
	ServerStartRequest,
	ServerStartResponse,
	ServerStopRequest,
	ServerStopResponse,
	ServerUpdateRequest,
	ServerUpdateResponse,
} from '../types/requests'

export const ServerService = {
	compositor: {
		createServer(data: ServerCreateRequest) {
			return axiosAuth().post<ServerCreateResponse>(getCreateServerUrl(), data)
		},

		getServerByHash(hash: string) {
			return axiosAuth().post<Server>(getServersUrl(hash))
		},

		getServers(data: ServerListRequest) {
			return axiosAuth().post<ServerListResponse>(getServersUrl(), data)
		},

		startServer(data: ServerStartRequest) {
			return axiosAuth().post<ServerStartResponse>(getStartServerUrl(), data)
		},

		stopServer(data: ServerStopRequest) {
			return axiosAuth().post<ServerStopResponse>(getStopServerUrl(), data)
		},

		removeServer(data: ServerRemoveRequest) {
			return axiosAuth().post<ServerRemoveResponse>(getRemoveServerUrl(), data)
		},

		updateServer(data: ServerUpdateRequest) {
			return axiosAuth().post<ServerUpdateResponse>(getUpdateServerUrl(), data)
		},
	},
	controller: {
		startGameServer(data: ServerStartRequest) {
			return axiosAuth().post<ServerStartResponse>(getStartGameServerUrl(), data)
		},

		stopGameServer(data: ServerStopRequest) {
			return axiosAuth().post<ServerStopResponse>(getStopGameServerUrl(), data)
		},

		// getServerActivePlayers(data: ActivePlayersRequest) {
		// 	return serverActivePlayers
		// },

		getServerCurrentUsage(data: ServerCurrentUsageRequest) {
			return serverCurrentUsage
		},

		getServerConsole(data: ServerConsoleRequest) {
			return serverConsole
		},

		getServerMainInfo(data: ServerMainInfoRequest) {
			return serverMainInfo
		},

		getServerProperties(data: ServerPropertiesRequest) {
			return serverProperties
		},
	},
}
