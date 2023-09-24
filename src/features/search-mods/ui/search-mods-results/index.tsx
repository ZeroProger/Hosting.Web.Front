import { useStore } from 'effector-react'
import Link from 'next/link'

import { Mod } from '@/shared/api/curse-forge'
import { ModUrls } from '@/shared/routes/urls'
import { $server } from '@/shared/store'

import styles from './styles.module.scss'

export function SearchModsResults({
	mods,
	searchTerm,
	showList,
}: {
	mods: Mod[]
	searchTerm: string
	showList: boolean
}) {
	const server = useStore($server)

	return (
		<>
			{showList && (
				<div className={styles.container}>
					{mods.length === 0 && (
						<div className={styles.empty}>По запросу {`"${searchTerm}"`} ничего не найдено</div>
					)}
					{mods.map((mod) => (
						<Link
							href={ModUrls.mod(server?.gameServerHash!, mod.id)}
							key={mod.id}
							className={styles.link}
						>
							{mod.name}
						</Link>
					))}
				</div>
			)}
		</>
	)
}
