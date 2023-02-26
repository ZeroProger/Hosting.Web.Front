import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

import { Icon } from '@/components/ui/Icon'

import { IParams } from '@/shared/types/base.types'

import { getServerPlayersUrl } from '@/config/url.config'

import styles from './Players.module.scss'

interface IPlayers {}

const Players: FC<IPlayers> = () => {
	const router = useRouter()
	const { slug } = router.query as IParams

	return (
		<div className={styles.container}>
			<Link href={getServerPlayersUrl(slug, '/white-list')} className={styles.group}>
				<Icon name="FaUserCheck" size={80} />
				<span>Белый список</span>
			</Link>
			<Link href={getServerPlayersUrl(slug, '/operators')} className={styles.group}>
				<Icon name="FaUserCog" size={80} />
				<span>Операторы</span>
			</Link>
			<Link href={getServerPlayersUrl(slug, '/banned-players')} className={styles.group}>
				<Icon name="FaUserSlash" size={80} />
				<span>Заблокированные игроки</span>
			</Link>
			<Link href={getServerPlayersUrl(slug, '/banned-ips')} className={styles.group}>
				<Icon name="TbCurrentLocationOff" size={80} />
				<span>Заблокированные IP адреса</span>
			</Link>
		</div>
	)
}

export default Players
