import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react'
import Joyride from 'react-joyride'

import { Icon } from '@/components/ui/Icon'

import { useTypedSelector } from '@/hooks/useTypedSelector'

import { IParams } from '@/shared/types/base.types'

import Meta from '@/utils/meta/Meta'

import { getServerPlayersUrl } from '@/config/url.config'

import styles from './ServerPlayers.module.scss'

interface IServerPlayers {}

const ServerPlayers: FC<IServerPlayers> = () => {
	const router = useRouter()
	const { slug } = router.query as IParams
	const server = useTypedSelector((state) => state.server.server)

	return (
		<>
			<Joyride
				run
				hideCloseButton
				continuous
				callback={({ status }) =>
					status === 'finished' &&
					router.push(getServerPlayersUrl(server?.gameServerHash!, '/white-list'))
				}
				steps={[
					{
						content: '6',
						target: '#server-players-step',
						disableBeacon: true,
						placement: 'auto',
						locale: { last: <strong>Дальше</strong> },
					},
				]}
			/>
			<Meta title="Управление игроками">
				<div className={styles.container} id="server-players-step">
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
			</Meta>
		</>
	)
}

export default ServerPlayers