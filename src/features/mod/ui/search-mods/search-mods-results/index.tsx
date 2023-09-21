import Link from 'next/link'

import { Mod } from '@/shared/api/curse-forge'
import { ModUrls } from '@/shared/routes/urls'

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
	return (
		<>
			{showList && (
				<div className={styles.container}>
					{mods.length === 0 && (
						<div className={styles.empty}>По запросу {`"${searchTerm}"`} ничего не найдено</div>
					)}
					{mods.map((mod) => (
						<Link href={ModUrls.mod(mod.id)} className={styles.link}>
							{mod.name}
						</Link>
					))}
				</div>
			)}
		</>
	)
}
