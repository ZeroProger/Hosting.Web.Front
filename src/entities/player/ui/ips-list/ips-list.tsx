import { useStore } from 'effector-react'
import { LocateFixed, PlusCircle, Trash2 } from 'lucide-react'
import router from 'next/router'

import { IPlayerListItem } from '@/shared/api/common'
import { JoyrideGuide } from '@/shared/lib/react-joyride'
import { playersCategorySteps } from '@/shared/lib/react-joyride/steps/players'
import { ModUrls } from '@/shared/routes/urls'
import { $server } from '@/shared/store'
import { Button } from '@/shared/ui/button'
import { Heading } from '@/shared/ui/heading'
import { Input } from '@/shared/ui/input'

import { DataListLoading } from '../list-loading'
import styles from '../styles.module.scss'

export function IpsList({
	ips,
	isLoading,
	title,
	addDataPlaceholder,
}: {
	ips: IPlayerListItem[] | undefined
	isLoading: boolean
	title: string
	addDataPlaceholder: string
}) {
	const server = useStore($server)

	if (isLoading) return <DataListLoading />

	return (
		<>
			<JoyrideGuide
				steps={playersCategorySteps}
				callback={({ status }) =>
					status === 'finished' && router.push(ModUrls.mods(server?.gameServerHash!))
				}
				scrollOffset={150}
			/>
			<div className={styles.container}>
				<Heading>{title}</Heading>
				<div className={styles.table}>
					{ips && ips.length !== 0 ? (
						ips.map((player) => (
							<div className={styles.row} key={player.id}>
								<div className={styles.item}>
									<LocateFixed size={32} />
									<span>{player.value}</span>
								</div>
								<Button variant="destructive" className="rounded-layout">
									<Trash2 size={28} />
								</Button>
							</div>
						))
					) : (
						<div>Пока нет забаненных IP-адресов</div>
					)}
					<div className={styles.row} id="add-player-step">
						<Input
							placeholder={addDataPlaceholder}
							className="w-full bg-transparent text-xl border-none focus-visible:ring-0 focus-visible:ring-offset-0"
						/>
						<Button
							variant="primary"
							className="flex flex-row items-center gap-3 rounded-layout text-xl"
						>
							<PlusCircle size={24} />
							Добавить
						</Button>
					</div>
				</div>
			</div>
		</>
	)
}
