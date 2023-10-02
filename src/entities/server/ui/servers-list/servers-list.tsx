import { IServer } from '@/shared/types'
import { ListItem } from './list-item'
import { ServersListLoading } from './loading'
import { ServerEmpty } from './server-empty'
import styles from './styles.module.scss'

export function ServersList({
	servers,
	isLoading = false,
	isPublic = false,
}: {
	servers?: IServer[]
	isLoading?: boolean
	isPublic?: boolean
}) {
	if (isLoading) return <ServersListLoading />

	return (
		<>
			{servers === undefined || servers.length === 0 ? (
				<ServerEmpty isPublic={isPublic} />
			) : (
				<div className={styles.servers}>
					{servers?.map((server) => (
						<ListItem isPublic={isPublic} server={server} key={server.gameServerHash} />
					))}
				</div>
			)}
		</>
	)
}
