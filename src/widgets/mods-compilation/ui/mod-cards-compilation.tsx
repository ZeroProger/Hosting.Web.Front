import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

import { ModCard } from '@/entities/mod/ui/card'

import { IMod } from '@/shared/api/curse-forge'

import { ModCardsCompilationLoading } from './loading'
import styles from './styles.module.scss'

export function ModCardsCompilation({
	mods,
	title,
	viewAllLink,
}: {
	mods: IMod[]
	title: string
	viewAllLink: string
}) {
	if (mods.length === 0) return <ModCardsCompilationLoading />

	return (
		<>
			<div className={styles.container}>
				<div className={styles.header}>
					<h2 className={styles.title}>{title}</h2>
					<Link href={viewAllLink} className={styles.viewAll}>
						Смотреть все <ChevronRight size={24} />
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
