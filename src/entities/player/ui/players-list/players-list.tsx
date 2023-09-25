import clsx from 'clsx'
import { useStore } from 'effector-react'
import { PlusCircle, Trash2 } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import playerHead from '@/app/assets/images/head1.webp'

import { IPlayerListItem } from '@/shared/api/common'
import { JoyrideGuide } from '@/shared/lib/react-joyride'
import { playersCategorySteps } from '@/shared/lib/react-joyride/steps/players'
import { ModUrls } from '@/shared/routes/urls'
import { $serverHash } from '@/shared/store'
import { Button } from '@/shared/ui/button'
import { Heading } from '@/shared/ui/heading'
import { Input } from '@/shared/ui/input'

import { DataListLoading } from '../list-loading'
import styles from '../styles.module.scss'
import { CallBackProps } from 'react-joyride'

export function PlayersList({
	players,
	isLoading,
	title,
	addDataPlaceholder,
}: {
	players?: IPlayerListItem[]
	isLoading: boolean
	title: string
	addDataPlaceholder: string
}) {
	const router = useRouter()

	const serverHash = useStore($serverHash)

	const joyrideCallback = ({ status }: CallBackProps) => {
		if (status === 'finished') {
			router.push(ModUrls.mods(serverHash!))
		}
	}

	if (isLoading) return <DataListLoading />

	return (
		<>
			<JoyrideGuide
				steps={playersCategorySteps}
				callback={joyrideCallback}
				scrollOffset={150}
			/>
			<div className={styles.container}>
				<Heading>{title}</Heading>
				<div className={styles.table}>
					{players && players.length !== 0 ? (
						players.map((player) => (
							<div className={styles.row} key={player.id}>
								<div className={styles.item}>
									<Image
										src={playerHead.src}
										alt={`Аватар ${player.value}`}
										width={32}
										height={32}
									/>
									<span>{player.value}</span>
								</div>
								<Button variant="destructive" className="remove-player-step">
									<Trash2 size={28} />
								</Button>
							</div>
						))
					) : (
						<div>В данной категории пока нет добавленных игроков</div>
					)}
					<div className={clsx(styles.row, styles.add)} id="add-player-step">
						<Input
							placeholder={addDataPlaceholder}
							className="w-full bg-transparent text-xl border-none focus-visible:ring-0 focus-visible:ring-offset-0"
						/>
						<Button variant="primary" className="flex flex-row items-center gap-3 text-xl">
							<PlusCircle size={24} />
							Добавить
						</Button>
					</div>
				</div>
			</div>
		</>
	)
}
