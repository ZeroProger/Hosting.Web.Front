import { FC, PropsWithChildren } from 'react'

import styles from './ServerOverviewCard.module.scss'

interface IServerOverviewCard extends PropsWithChildren {
	headerTitle: string
	isConsole: boolean
	isActivePlayers: boolean
}
//#TODO: Доделать переиспользуемый компонент

const ServerOverviewCard: FC<IServerOverviewCard> = ({ headerTitle, children }) => {
	return (
		<div className={styles.card}>
			<div className={styles.header}>{headerTitle}</div>
			<div className={styles.hr}></div>
			<div className={styles.body}></div>
		</div>
	)
}

export default ServerOverviewCard
