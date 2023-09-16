// import { serverActivePlayers } from 'fakeData/users.data'
import { axiosAuth } from '@/shared/api/auth'
import { ServerApiUrls } from '@/shared/api/urls'

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
	create(data: ServerCreateRequest) {
		return axiosAuth().post<ServerCreateResponse>(ServerApiUrls.create(), data)
	},

	server(hash: string) {
		return axiosAuth().post<Server>(ServerApiUrls.server(hash))
	},

	servers(data: ServerListRequest) {
		return axiosAuth().post<ServerListResponse>(ServerApiUrls.servers(), data)
	},

	start(data: ServerStartRequest) {
		return axiosAuth().post<ServerStartResponse>(ServerApiUrls.start(), data)
	},

	stop(data: ServerStopRequest) {
		return axiosAuth().post<ServerStopResponse>(ServerApiUrls.stop(), data)
	},

	remove(data: ServerRemoveRequest) {
		return axiosAuth().post<ServerRemoveResponse>(ServerApiUrls.remove(), data)
	},

	update(data: ServerUpdateRequest) {
		return axiosAuth().post<ServerUpdateResponse>(ServerApiUrls.update(), data)
	},

	// #TODO entities/player
	// getServerActivePlayers(data: ActivePlayersRequest) {
	// 	return serverActivePlayers
	// },

	currentUsage(data: ServerCurrentUsageRequest) {
		return serverCurrentUsage
	},

	console(data: ServerConsoleRequest) {
		return serverConsole
	},

	mainInfo(data: ServerMainInfoRequest) {
		return serverMainInfo
	},

	properties(data: ServerPropertiesRequest) {
		return serverProperties
	},
}