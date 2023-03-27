import Link from 'next/link'
import { FC } from 'react'

import { Icon } from '@/components/ui/Icon'
import SkeletonLoaderList from '@/components/ui/skeleton-loader/SkeletonLoaderList'

import { IMod } from '@/shared/types/curseforge.types'

import styles from './ModsCompilation.module.scss'
import ModsCompilationItem from './ModsCompilationItem'

interface IModsCompilation {
	title: string
	link: string
	mods: IMod[]
}

const ModsCompilation: FC<IModsCompilation> = ({ title, link, mods }) => {
	const modsEmpty = mods.length === 0

	return (
		<>
			{!modsEmpty ? (
				<div className={styles.container}>
					<div className={styles.header}>
						<h2 className={styles.title}>{title}</h2>
						<Link href={link} className={styles.viewAll}>
							Смотреть все <Icon name="MdKeyboardArrowRight" size={24} />
						</Link>
					</div>
					<ul className={styles.mods}>
						{mods.map((mod) => (
							<ModsCompilationItem key={mod.id} mod={mod} />
						))}
					</ul>
				</div>
			) : (
				<div className={styles.emptyContainer}>
					<SkeletonLoaderList count={12} height={260} />
				</div>
			)}
		</>
	)
}

export default ModsCompilation
