import { ServerConsole as Console } from '@/widgets/server-console'

import styles from './styles.module.scss'

export function ServerConsole() {
	return (
		<div className={styles.container}>
			<Console />
		</div>
	)
}
