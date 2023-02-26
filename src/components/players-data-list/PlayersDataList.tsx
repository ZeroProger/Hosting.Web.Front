import { Input } from '@nextui-org/react'
import { bannedIps, whiteListUsers } from 'fakeData/users.data'
import { FC } from 'react'

import { PlayersDataListType } from '@/shared/types/user.types'

import { Icon } from '../ui/Icon'
import Heading from '../ui/heading/Heading'

import styles from './PlayersDataList.module.scss'

interface IPlayersDataList {
	title: string
	addDataPlaceholder: string
	dataType: PlayersDataListType
}

const PlayersDataList: FC<IPlayersDataList> = ({ title, addDataPlaceholder, dataType }) => {
	return (
		<div className={styles.container}>
			<Heading title={title} />
			<div className={styles.tableContainer}>
				<div className={styles.table}>
					{dataType !== PlayersDataListType.BannedIps &&
						whiteListUsers.map((user) => (
							<div className={styles.tableItem} key={user.id}>
								<div className={styles.tableItemData}></div>
								<div className={styles.tableItemAction}></div>
							</div>
						))}
					{dataType === PlayersDataListType.BannedIps &&
						bannedIps.map((ip) => (
							<div className={styles.tableItem} key={ip.ip}>
								<div className={styles.tableItemData}>
									<Icon name="TbCurrentLocation" size={24} />
									<span>{ip.ip}</span>
								</div>
								<div className={styles.tableItemAction}></div>
							</div>
						))}
				</div>
				<div className={styles.addData}>
					<Input type="text" placeholder={addDataPlaceholder} />
				</div>
			</div>
		</div>
	)
}

export default PlayersDataList
