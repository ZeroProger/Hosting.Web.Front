import { Button, Input } from '@nextui-org/react'
import clsx from 'clsx'
import { bannedIps, whiteListUsers } from 'fakeData/users.data'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { FC } from 'react'
import Joyride from 'react-joyride'

import useLocalStorage from '@/hooks/useLocalStorage'

import { PlayersDataListType } from '@/shared/types/player.types'

import Meta from '@/utils/meta/Meta'

import { joyrideStylesOptions, joyrideStylesTooltip } from '@/config/constants'
import { getServerModsUrl } from '@/config/url.config'

import { Icon } from '../ui/Icon'
import Heading from '../ui/heading/Heading'

import styles from './PlayersDataList.module.scss'

interface IPlayersDataList {
	title: string
	addDataPlaceholder: string
	dataType: PlayersDataListType
}

const PlayersDataList: FC<IPlayersDataList> = ({ title, addDataPlaceholder, dataType }) => {
	const router = useRouter()
	const [isGuideCompleted, setIsGuideCompleted] = useLocalStorage('isGuideCompleted', false)

	return (
		<>
			<Joyride
				run={!isGuideCompleted}
				hideCloseButton
				hideBackButton
				continuous
				disableOverlayClose
				scrollOffset={150}
				callback={({ status }) => status === 'finished' && router.push(getServerModsUrl())}
				styles={{ options: joyrideStylesOptions, tooltip: joyrideStylesTooltip }}
				steps={[
					{
						content: 'Введите ник игрока или его IP-адрес и нажмите добавить.',
						target: '#add-player-step',
						disableBeacon: true,
						placement: 'auto',
						locale: { next: <strong>Дальше</strong> },
					},
					{
						content: 'Нажав на эту кнопку вы удалите игрока из соответствующей категории',
						target: '.btn-error',
						disableBeacon: true,
						placement: 'auto',
						locale: { next: <strong>Дальше</strong> },
					},
				]}
			/>
			<Meta title={title}>
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
							<div className={clsx(styles.tableItem, styles.addData)} id="add-player-step">
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
			</Meta>
		</>
	)
}

export default PlayersDataList
