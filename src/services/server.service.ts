import { serverConsole, serverMainInfo, serverProperties, serverUsage } from 'fakeData/server.data'
import { serverActivePlayers } from 'fakeData/users.data'

import {
	IServerCreateRequest,
	IServerCreateResponse,
	IServerGetListRequest,
	IServerGetListResponse,
	IServerRemoveRequest,
	IServerRemoveResponse,
	IServerStartContainerRequest,
	IServerStartContainerResponse,
	IServerStopContainerRequest,
	IServerStopContainerResponse,
	IServerUpdateRequest,
	IServerUpdateResponse,
} from '@/shared/types/requests/server-requests.types'
import { IServer } from '@/shared/types/server.types'

import { capitalize } from '@/utils/string/capitalize'

import {
	getCreateServerUrl,
	getRemoveServerUrl,
	getServersListUrl,
	getStartServerContainerUrl,
	getStopServerContainerUrl,
	getUpdateServerUrl,
} from '@/config/api/servers-api.config'

import { axiosAuthClassic } from '@/api/interceptors'

export const ServerService = {
	compositor: {
		createServer(data: IServerCreateRequest) {
			return axiosAuthClassic.post<IServerCreateResponse>(getCreateServerUrl(), data)
		},

		getServerByUUID(uuid: string) {
			return {
				name: uuid
					.split('-')
					.map((w) => capitalize(w))
					.join(' '),
				uuid: uuid,
				ip: `${uuid}.simplehost.ru`,
				dynamicIp: 'dynY6ZHOK.simplehost.cloud:10305',
				software: {
					id: '2',
					name: 'Fabric',
					slug: 'fabric',
				},
				version: {
					name: '1.19.2',
				},
				online: true,
				activePlayers: serverActivePlayers,
				mainInfo: serverMainInfo,
				console: serverConsole,
				usage: serverUsage,
				settings: serverProperties,
			} as IServer
		},

		getServers(data: IServerGetListRequest) {
			return axiosAuthClassic.post<IServerGetListResponse>(getServersListUrl(), data)
		},

		startServerContainer(data: IServerStartContainerRequest) {
			return axiosAuthClassic.post<IServerStartContainerResponse>(
				getStartServerContainerUrl(),
				data
			)
		},

		stopServerContainer(data: IServerStopContainerRequest) {
			return axiosAuthClassic.post<IServerStopContainerResponse>(getStopServerContainerUrl(), data)
		},

		removeServer(data: IServerRemoveRequest) {
			return axiosAuthClassic.post<IServerRemoveResponse>(getRemoveServerUrl(), data)
		},

		updateServer(data: IServerUpdateRequest) {
			return axiosAuthClassic.post<IServerUpdateResponse>(getUpdateServerUrl(), data)
		},
	},
	controller: {
		startGameServer() {},

		stopGameServer() {},
	},
}
