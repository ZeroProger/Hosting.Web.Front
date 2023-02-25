import { Avatar, Button, Text } from '@nextui-org/react'
import { useRouter } from 'next/router'
import { FC } from 'react'

import user1 from '@/assets/images/head1.webp'
import user2 from '@/assets/images/head2.png'
import user3 from '@/assets/images/head3.webp'
import user4 from '@/assets/images/head4.webp'

import { Icon } from '../ui/Icon'

import styles from './ServerHeader.module.scss'
import ServerTabs from './ServerTabs'

interface IServerHeader {}

const ServerHeader: FC<IServerHeader> = () => {
	const router = useRouter()
	const { slug } = router.query

	const users = [user1.src, user2.src, user3.src, user4.src]

	return (
		<div className={styles.container}>
			<div className={styles.bars}>
				<div className={styles.mainBar}>
					<div className={styles.mainBarInfo}>
						<Button icon={<Icon name="MdArrowBackIos" />} className={styles.backBtn}></Button>
						<Text className={styles.mainBarName}>Arcade Sky</Text>
					</div>
					<div className={styles.mainBarActions}>
						<Button className="btn-error">Остановить сервер</Button>
						<Button icon={<Icon name="BsThreeDots" />} className="btn-default"></Button>
					</div>
				</div>
				<div className={styles.subBar}>
					<div className={styles.subBarAddress}>
						<Icon name="TbWorld" propsIcon={{ size: 24 }} />
						<span>{slug}.simplehost</span>
					</div>
					<div className={styles.subBarUsers}>
						<Avatar.Group>
							{users.map((url, index) => (
								<Avatar src={url} key={index} bordered stacked squared size="sm" />
							))}
						</Avatar.Group>
						<span>4/8 игроков</span>
					</div>
					<div className={styles.subBarCore}>
						<Icon name="BsBookmarkFill" />
						<span>Paper 1.16.5</span>
					</div>
					<div className={styles.subBarStatus}>
						<Icon name="GoPrimitiveDot" />
						<span>Онлайн</span>
					</div>
				</div>
			</div>
			<div className={styles.controls}>
				<div className={styles.tabs}>
					<ServerTabs slug={slug} />
				</div>
				<div className={styles.otherActions}>
					<button type="button" className={styles.otherActionsBtn}>
						<Icon name="RxUpdate" propsIcon={{ className: styles.otherActionsIcon, size: 24 }} />
						<span className={styles.otherActionsText}>Изменить версию</span>
					</button>
					<button type="button" className={styles.otherActionsBtn}>
						<Icon
							name="RiShareForwardFill"
							propsIcon={{ className: styles.otherActionsIcon, size: 24 }}
						/>
						<span className={styles.otherActionsText}>Поделиться</span>
					</button>
				</div>
			</div>
		</div>
	)
}

export default ServerHeader
