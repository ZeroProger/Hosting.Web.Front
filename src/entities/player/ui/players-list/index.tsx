import clsx from 'clsx'
import Image from 'next/image'
import router from 'next/router'

import playerHead from '@/app/assets/images/head1.webp'

import { IPlayerListItem } from '@/shared/api/common'
import { JoyrideGuide } from '@/shared/lib/react-joyride'
import { playersCategorySteps } from '@/shared/lib/react-joyride/steps/players'
import { ModUrls } from '@/shared/routes/urls'
import { Button } from '@/shared/ui/button'
import { Heading } from '@/shared/ui/heading'
import { Icon } from '@/shared/ui/icon'
import { Input } from '@/shared/ui/input'

import styles from './styles.module.scss'

export function PlayersList({
	players,
	title,
	addDataPlaceholder,
}: {
	players: IPlayerListItem[]
	title: string
	addDataPlaceholder: string
}) {
	return (
		<>
			<JoyrideGuide
				steps={playersCategorySteps}
				callback={({ status }) => status === 'finished' && router.push(ModUrls.mods())}
				scrollOffset={150}
			/>
			<div className={styles.container}>
				<Heading>{title}</Heading>
				<div className={styles.tableContainer}>
					<div className={styles.table}>
						{players && players.length !== 0 ? (
							players.map((player) => (
								<div className={styles.tableItem} key={player.id}>
									<div className={styles.tableItemData}>
										<Image
											src={playerHead.src}
											alt={`Аватар ${player.value}`}
											width={32}
											height={32}
										/>
										<span>{player.value}</span>
									</div>
									<div>
										<Button className="btn-error">
											<Icon name="MdDelete" color="#fff" size={32} />
										</Button>
									</div>
								</div>
							))
						) : (
							<div>Пока нет игроков</div>
						)}
						<div className={clsx(styles.tableItem, styles.addData)} id="add-player-step">
							<Input type="text" placeholder={addDataPlaceholder} className="w-full" />
							<Button className={clsx('btn-default', styles.addDataBtn)}>
								<Icon name="AiOutlinePlus" size={24} />
								<span>Добавить</span>
							</Button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
