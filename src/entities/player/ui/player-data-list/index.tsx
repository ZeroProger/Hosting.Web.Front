// 'use client'

// import clsx from 'clsx'
// import { useRouter } from 'next/navigation'

// import { IPlayerListItem } from '@/shared/api/common'
// import { JoyrideGuide } from '@/shared/lib/react-joyride'
// import { playersCategorySteps } from '@/shared/lib/react-joyride/steps/players'
// import { ModUrls } from '@/shared/routes/urls'
// import { Button } from '@/shared/ui/button'
// import { Heading } from '@/shared/ui/heading'
// import { Icon } from '@/shared/ui/icon'
// import { Input } from '@/shared/ui/input'

// import { PlayersList } from '../players-list'

// import styles from './styles.module.scss'

// interface IPlayersDataListProps {
// 	title: string
// 	addDataPlaceholder: string
// 	items: IPlayerListItem[]
// }

// export function PlayerDataList({ title, addDataPlaceholder, items }: IPlayersDataListProps) {
// 	const router = useRouter()

// 	return (
// 		<>
// 			<JoyrideGuide
// 				steps={playersCategorySteps}
// 				callback={({ status }) => status === 'finished' && router.push(ModUrls.mods())}
// 				scrollOffset={150}
// 			/>
// 			<div className={styles.container}>
// 				<Heading>{title}</Heading>
// 				<div className={styles.tableContainer}>
// 					<div className={styles.table}>
// 						<PlayersList players={items} />
// 						<div className={clsx(styles.tableItem, styles.addData)} id="add-player-step">
// 							<Input type="text" placeholder={addDataPlaceholder} className="w-full" />
// 							<Button className={clsx('btn-default', styles.addDataBtn)}>
// 								<Icon name="AiOutlinePlus" size={24} />
// 								<span>Добавить</span>
// 							</Button>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</>
// 	)
// }
