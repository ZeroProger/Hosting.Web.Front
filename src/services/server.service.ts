import { serverConsole, serverMainInfo, serverProperties, serverUsage } from 'fakeData/server.data'
import { serverActivePlayers } from 'fakeData/users.data'

import { IServer } from './../shared/types/server.types'

export const ServerService = {
	getServerByUUID(uuid: string) {
		//return axiosAuthClassic.get<IServer>(getServersUrl(uuid))
		return {
			name: uuid,
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
}
