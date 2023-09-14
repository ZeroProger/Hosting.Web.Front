import { FC } from 'react'
import { useQuery } from 'react-query'

import ServersList from '@/components/servers-list/ServersList'
import Heading from '@/components/ui/heading/Heading'

import { ServerService } from '@/services/server.service'

import Meta from '@/utils/meta/Meta'

import {
	getMinecraftPublicServersRequest,
	getServersUrl as getServersApiUrl,
} from '@/config/api/servers-api.config'

import styles from './PublicServers.module.scss'

interface IPublicServers {}

const PublicServers: FC<IPublicServers> = () => {
	const { data: publicServers = [] } = useQuery(
		getServersApiUrl('public-servers'),
		() => ServerService.compositor.getServers(getMinecraftPublicServersRequest),
		{ select: (data) => data.data.servers }
	)

	return (
		<Meta title="Публичные сервера" description="Публичные сервера">
			<div className={styles.container}>
				<Heading title="Публичные сервера" />
				<ServersList servers={publicServers} isPublic />
			</div>
		</Meta>
	)
}

export default PublicServers
