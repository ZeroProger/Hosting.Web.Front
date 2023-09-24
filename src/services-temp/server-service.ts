import {
	IServerStartRequest,
	IServerStartResponse,
	IServerStopRequest,
	IServerStopResponse,
} from '@/features/server-controls/types'

import { axiosAuth } from '@/shared/api/auth'
import { ServerListRequest } from '@/shared/api/common'
import { ServerApiUrls } from '@/shared/api/urls'
import { IServer } from '@/shared/types/server'

import {
	IServerActivePlayersRequest,
	IServerConsoleRequest,
	IServerCreateRequest,
	IServerCreateResponse,
	IServerCurrentUsageRequest,
	IServerListResponse,
	IServerMainInfoRequest,
	IServerPropertiesRequest,
	IServerRemoveRequest,
	IServerRemoveResponse,
	IServerUpdateRequest,
	IServerUpdateResponse,
} from '../entities/server/types/requests'
import {
	serverActivePlayers,
	serverConsole,
	serverCurrentUsage,
	serverMainInfo,
	serverProperties,
} from '../shared/$fake-data$/server.data'

export const ServerService = {
	create(data: IServerCreateRequest) {
		return axiosAuth().post<IServerCreateResponse>(ServerApiUrls.create(), data)
	},

	server(hash: string) {
		return axiosAuth().post<IServer>(ServerApiUrls.server(hash))
	},

	servers(data: ServerListRequest) {
		return axiosAuth().post<IServerListResponse>(ServerApiUrls.servers(), data)
	},

	start(data: IServerStartRequest) {
		return axiosAuth().post<IServerStartResponse>(ServerApiUrls.start(), data)
	},

	stop(data: IServerStopRequest) {
		return axiosAuth().post<IServerStopResponse>(ServerApiUrls.stop(), data)
	},

	remove(data: IServerRemoveRequest) {
		return axiosAuth().post<IServerRemoveResponse>(ServerApiUrls.remove(), data)
	},

	update(data: IServerUpdateRequest) {
		return axiosAuth().post<IServerUpdateResponse>(ServerApiUrls.update(), data)
	},

	activePlayers(data: IServerActivePlayersRequest) {
		return serverActivePlayers
	},

	currentUsage(data: IServerCurrentUsageRequest) {
		return serverCurrentUsage
	},

	console(data: IServerConsoleRequest) {
		return serverConsole
	},

	mainInfo(data: IServerMainInfoRequest) {
		return serverMainInfo
	},

	properties(data: IServerPropertiesRequest) {
		return serverProperties
	},
}
