import { FC } from 'react'
import { useQuery } from 'react-query'

import ServersList from '@/components/servers-list/ServersList'
import Heading from '@/components/ui/heading/Heading'

import { useAuth } from '@/hooks/auth/useAuth'

import { ServerService } from '@/services/server.service'

import Meta from '@/utils/meta/Meta'

import {
	getMinecraftUserServersRequest,
	getServersUrl as getServersApiUrl,
} from '@/config/api/servers-api.config'

import styles from './Servers.module.scss'

interface IServers {}

const Servers: FC<IServers> = () => {
	const { authToken } = useAuth()

	const { data: userServers = [] } = useQuery(
		getServersApiUrl(String(authToken)),
		() => ServerService.compositor.getServers(getMinecraftUserServersRequest),
		{ select: (data) => data.data.servers, enabled: authToken !== null }
	)

	return (
		<Meta title="Мои сервера">
			<div className={styles.container}>
				<Heading title="Мои сервера" />
				<ServersList servers={userServers} />
			</div>
		</Meta>
	)
}

export default Servers
