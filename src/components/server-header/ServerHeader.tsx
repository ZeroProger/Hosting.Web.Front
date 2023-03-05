import { Button, Text } from '@nextui-org/react'
import { useRouter } from 'next/router'
import { FC } from 'react'

import { useTypedSelector } from '@/hooks/useTypedSelector'

import { Icon } from '../ui/Icon'
import { AvatarGroup } from '../ui/avatar-group/AvatarGroup'

import styles from './ServerHeader.module.scss'
import ServerTabs from './ServerTabs'

interface IServerHeader {}

const ServerHeader: FC<IServerHeader> = () => {
	const router = useRouter()
	const server = useTypedSelector((state) => state.serverReducer.server)

	const handleBackBtn = () => {
		router.back()
	}

	const handleStopServerBtn = () => {}

	const handleStartServerBtn = () => {}

	return (
		<div className={styles.container}>
			<div className={styles.bars}>
				<div className={styles.mainBar}>
					<div className={styles.mainBarInfo}>
						<Button
							onClick={handleBackBtn}
							icon={<Icon name="MdArrowBackIos" size={24} />}
							className={styles.backBtn}
						></Button>
						<Text className={styles.mainBarName}>{server.name}</Text>
					</div>
					<div className={styles.mainBarActions}>
						{server.online ? (
							<Button className={styles.btnError} onClick={handleStopServerBtn}>
								Остановить сервер
							</Button>
						) : (
							<Button className={styles.btnStart} onClick={handleStartServerBtn}>
								Запустить сервер
							</Button>
						)}

						<Button icon={<Icon name="BsThreeDots" size={24} />} className="btn-default"></Button>
					</div>
				</div>
				<div className={styles.subBar}>
					<div className={styles.subBarAddress}>
						<Icon name="TbWorld" size={24} />
						<span>{server.ip}</span>
					</div>
					<div className={styles.subBarUsers}>
						<AvatarGroup />
						<span>{server.activePlayers.length} / 10</span>
					</div>
					<div className={styles.subBarCore}>
						<Icon name="BsBookmarkFill" />
						<span>
							{server.software.name} {server.version.label}
						</span>
					</div>
					<div className={styles.subBarStatus}>
						<Icon name="GoPrimitiveDot" />
						{server.online ? (
							<span className={styles.online}>Онлайн</span>
						) : (
							<span className={styles.offline}>Оффлайн</span>
						)}
					</div>
				</div>
			</div>
			<div className={styles.controls}>
				<div className={styles.tabs}>
					<ServerTabs slug={server.uuid} />
				</div>
				<div className={styles.otherActions}>
					<button type="button" className={styles.otherActionsBtn}>
						<Icon name="RiShareForwardFill" className={styles.otherActionsIcon} size={28} />
						<span className={styles.otherActionsText}>Поделиться</span>
					</button>
				</div>
			</div>
		</div>
	)
}

export default ServerHeader
