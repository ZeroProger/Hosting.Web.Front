import { Button, Input } from '@nextui-org/react'
import clsx from 'clsx'
import { bannedIps, whiteListUsers } from 'fakeData/users.data'
import Image from 'next/image'
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
								<div className={styles.tableItemData}>
									<Image src={user.image} alt={`Аватар ${user.name}`} width={32} height={32} />
									<span>{user.name}</span>
								</div>
								<div className={styles.tableItemAction}>
									<Button className="btn-error">
										<Icon name="MdDelete" color="#fff" size={32} />
									</Button>
								</div>
							</div>
						))}
					{dataType === PlayersDataListType.BannedIps &&
						bannedIps.map((ip) => (
							<div className={styles.tableItem} key={ip.ip}>
								<div className={styles.tableItemData}>
									<Icon name="TbCurrentLocation" size={32} />
									<span>{ip.ip}</span>
								</div>
								<div className={styles.tableItemAction}>
									<Button className="btn-error">
										<Icon name="MdDelete" color="#fff" size={32} />
									</Button>
								</div>
							</div>
						))}
					<div className={clsx(styles.tableItem, styles.addData)}>
						<Input
							type="text"
							placeholder={addDataPlaceholder}
							fullWidth
							animated={false}
							shadow={false}
						/>
						<Button className={clsx('btn-default', styles.addDataBtn)}>
							<Icon name="AiOutlinePlus" size={24} />
							<span>Добавить</span>
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PlayersDataList