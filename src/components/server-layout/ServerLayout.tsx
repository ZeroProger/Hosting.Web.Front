import { FC, PropsWithChildren } from 'react'

import ServerHeader from '../server-header/ServerHeader'

import styles from './ServerLayout.module.scss'

const ServerLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className={styles.container}>
			<div className={styles.headerContainer}>
				<ServerHeader />
			</div>
			<div className={styles.contentContainer}>{children}</div>
		</div>
	)
}

export default ServerLayout
