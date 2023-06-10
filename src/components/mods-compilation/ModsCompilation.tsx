import Link from 'next/link';
import { useRouter } from 'next/router'
import { FC } from 'react'
import Joyride from 'react-joyride'

import { Icon } from '@/components/ui/Icon'

import { IMod } from '@/shared/types/curseforge.types'

import { getServerModUrl } from '@/config/url.config'

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
	const { push } = useRouter()
	return (
		<>
			<Joyride
				disableOverlay
				scrollOffset={100}
				run
				hideCloseButton
				continuous
				callback={({ status }) => status === 'finished' && push(getServerModUrl(`${mods[0].id}`))}
				steps={[
					{
						content: '9',
						target: '#mods-compilation-step',
						disableBeacon: true,
						placement: 'auto',
						locale: { last: <strong>Дальше</strong> },
						styles: { options: { zIndex: 1000000 } },
					},
				]}
			/>
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