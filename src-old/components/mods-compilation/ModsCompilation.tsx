import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

import { Icon } from '@/components/ui/Icon'

import { IMod } from '@/shared/types/curseforge.types'

import SkeletonLoaderList from '../ui/skeleton-loader/SkeletonLoaderList'

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
			<div className={styles.container} id="mods-compilation-step">
				{!modsEmpty ? (
					<>
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
					</>
				) : (
					<>
						<div className={styles.header}>
							<div className="w-[200px]">
								<SkeletonLoaderList count={1} height={40} />
							</div>
							<div className="w-[150px]">
								<SkeletonLoaderList count={1} height={40} />
							</div>
						</div>
						<ul className={styles.mods}>
							<SkeletonLoaderList count={12} height={260} />
						</ul>
					</>
				)}
			</div>
		</>
	)
}

export default ModsCompilation
