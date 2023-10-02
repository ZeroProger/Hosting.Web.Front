import clsx from 'clsx'
import { LocateFixed, PlusCircle, Trash2 } from 'lucide-react'

import { IPlayerListItem } from '@/shared/api/common'
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
	ips?: IPlayerListItem[]
	isLoading: boolean
	title: string
	addDataPlaceholder: string
}) {
	if (isLoading) return <DataListLoading />

	return (
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
							<Button
								variant="destructive"
								size="icon"
								className="px-1 py-1 text-destructive hover:bg-destructive/40 bg-transparent"
							>
								<Trash2 size={28} />
							</Button>
						</div>
					))
				) : (
					<div>Пока нет заблокированных IP-адресов</div>
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
	)
}
