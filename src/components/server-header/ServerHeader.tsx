import { Avatar, Button, Text } from '@nextui-org/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, useState } from 'react'

import user1 from '@/assets/images/head1.webp'
import user2 from '@/assets/images/head2.png'
import user3 from '@/assets/images/head3.webp'
import user4 from '@/assets/images/head4.webp'

import {
	getServerBackupsUrl,
	getServerConsoleUrl,
	getServerFilesUrl,
	getServerModsUrl,
	getServerOverviewUrl,
	getServerPlayersUrl,
	getServerSettingsUrl,
} from '@/config/url.config'

import styles from './ServerHeader.module.scss'

interface IServerHeader {}

const ServerHeader: FC<IServerHeader> = () => {
	const router = useRouter()
	const { slug } = router.query

	const users = [user1.src, user2.src, user3.src, user4.src]
	const [tabIndex, setTabIndex] = useState(0)

	return (
		<div className={styles.container}>
			<div className={styles.mainBar}>
				<div className={styles.mainBarName}>
					<Button></Button>
					<Text>{slug}</Text>
				</div>
				<div className={styles.mainBarActions}>
					<Button>Остановить сервер</Button>
					<Button>...</Button>
				</div>
			</div>
			<div className={styles.subBar}>
				<div className={styles.subBarAddress}>{slug}.simplehost</div>
				<div className={styles.subBarUsers}>
					<Avatar.Group>
						{users.map((url, index) => (
							<Avatar src={url} key={index} bordered stacked size="sm" />
						))}
					</Avatar.Group>
					<Text>4/8 игроков</Text>
				</div>
				<div className={styles.subBarCore}>
					{/* Иконка версии */}
					<Text>Paper 1.16.5</Text>
				</div>
				<div className={styles.subBarStatus}>
					{/* Красная или зеленая точка, иконка */}
					<Text color="green">Онлайн</Text>
				</div>
			</div>
			<div className={styles.tabs}>
				<Link href={getServerOverviewUrl(`${slug}`)}>Основая информация</Link>
				<Link href={getServerPlayersUrl(`${slug}`)}>Игроки</Link>
				<Link href={getServerModsUrl(`${slug}`)}>Моды</Link>
				<Link href={getServerConsoleUrl(`${slug}`)}>Консоль</Link>
				<Link href={getServerFilesUrl(`${slug}`)}>Файлы</Link>
				<Link href={getServerBackupsUrl(`${slug}`)}>Бэкапы</Link>
				<Link href={getServerSettingsUrl(`${slug}`)}>Настройки</Link>
			</div>
		</div>
	)
}

export default ServerHeader
