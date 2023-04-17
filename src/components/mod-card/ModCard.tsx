import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

import { IMod } from '@/shared/types/curseforge.types'

import siteLogo from '@/assets/images/logo-green.png'

import { russifyUTC } from '@/utils/string/russifyUTC'

import { modClassesMap } from '@/config/curseforge-api.config'
import { getServerModSearchUrl } from '@/config/url.config'

import { Icon } from '../ui/Icon'

import styles from './ModCard.module.scss'

interface IModCard {
	mod: IMod
}

export const ModCard: FC<IModCard> = ({ mod }) => {
	const router = useRouter()
	const query = router.query

	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<Image
					src={(mod.logo && mod.logo.thumbnailUrl) || siteLogo.src}
					alt={mod.name}
					width={144}
					height={144}
				/>
				<div className={styles.info}>
					<h1>
						{mod.name} | by {mod.authors[0].name}
					</h1>
					<p>{mod.summary}</p>
					<div className={styles.numbers}>
						<div className={styles.number}>
							<Icon name="MdFileDownload" size={24} className={styles.icon} />
							{mod.downloadCount}
						</div>
						<div className={styles.number}>
							<Icon name="MdDateRange" size={24} className={styles.icon} />
							{russifyUTC(mod.dateCreated)}
						</div>
						<div className={styles.number}>
							<Icon name="RiTimeFill" size={24} className={styles.icon} />
							{russifyUTC(mod.dateModified)}
						</div>
					</div>
				</div>
			</div>
			<div className={styles.classification}>
				<Link
					href={getServerModSearchUrl({ ...query, categoryId: undefined, classId: mod.classId })}
				>
					{modClassesMap.get(mod.classId)}
				</Link>
				{mod.categories.map(({ name, id }) => (
					<Link
						key={id}
						href={getServerModSearchUrl({ ...query, categoryId: id })}
						className={styles.category}
					>
						{name}
					</Link>
				))}
			</div>
		</div>
	)
}
