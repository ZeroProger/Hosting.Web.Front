import Link from 'next/link'

import { ModCard } from '@/entities/mod/ui/card'

import { Mod } from '@/shared/api/curse-forge'
import { Icon } from '@/shared/ui/icon'

import { ModsCompilationLoading } from './loading'
import styles from './styles.module.scss'

export function ModsCompilation({
	mods,
	title,
	viewAllLink,
	id
}: {
	mods: Mod[]
	title: string
	viewAllLink: string
	id?: string
}) {
	if (mods.length === 0) return <ModsCompilationLoading />

	return (
		<>
			<div className={styles.container} id={id}>
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
