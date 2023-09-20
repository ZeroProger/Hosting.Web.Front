import Link from 'next/link'

import { Mod } from '@/shared/api/curse-forge'
import { Icon } from '@/shared/ui/icon'

import { ModCard } from '../card'

import { ModListLoading } from './loading'
import styles from './styles.module.scss'

export function ModList({
	mods,
	title,
	viewAllLink,
}: {
	mods: Mod[]
	title: string
	viewAllLink: string
}) {
	if (mods.length === 0) return <ModListLoading />

	return (
		<>
			<div className={styles.container} id="mods-compilation-step">
				<div className={styles.header}>
					<h2 className={styles.title}>{title}</h2>
					<Link href={viewAllLink} className={styles.viewAll}>
						Смотреть все <Icon name="MdKeyboardArrowRight" size={24} />
					</Link>
				</div>
				<ul className={styles.mods}>
					{mods.map((mod) => (
						<ModCard key={mod.id} mod={mod} />
					))}
				</ul>
			</div>
		</>
	)
}
