import { Server } from '../../types'

import { ListItem } from './list-item'
import { ServerEmpty } from './server-empty'
import styles from './styles.module.scss'

export function ServersList({
	servers,
	isPublic = false,
}: {
	servers: Server[]
	isPublic?: boolean
}) {
	return (
		<>
			{servers.length === 0 ? (
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
