import { ServerHeader } from '@/widgets/server/server-header'

import styles from './styles.module.scss'

export function ServerLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<div className={styles.headerContainer}>
					<ServerHeader />
				</div>
			</div>
			<div className={styles.container}>
				<div className={styles.contentContainer}>
					<div className={styles.content}>{children}</div>
				</div>
			</div>
		</div>
	)
}
