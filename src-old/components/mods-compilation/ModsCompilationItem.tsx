import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import numeral from 'numeral'
import { FC } from 'react'

import { IMod } from '@/shared/types/curseforge.types'

import { modClassesMap } from '@/config/api/curseforge-api.config'
import { getServerModUrl } from '@/config/url.config'

import { Icon } from '../ui/Icon'

import styles from './ModsCompilationItem.module.scss'

interface IModsCompilationItem {
	mod: IMod
}

const ModsCompilationItem: FC<IModsCompilationItem> = ({ mod }) => {
	const numeralOptions = mod.downloadCount < 1000 ? '' : '0.0a'
	const formattedDownloadsCount = numeral(mod.downloadCount).format(numeralOptions).toUpperCase()

	return (
		<li className={styles.card}>
			<Link href={getServerModUrl(String(mod.id))}>
				<div className={styles.inner}>
					<div className={styles.art}>
						<Image
							src={mod.logo.thumbnailUrl}
							alt={`Логотип мода ${mod.name}`}
							width={144}
							height={144}
						/>
					</div>
					<div className={styles.details}>
						<h3 className={styles.name}>{mod.name}</h3>
						<div className={styles.author}>by {mod.authors.at(0)?.name}</div>
						<ul className={clsx(styles.detailsList, styles.short)}>
							<li className={styles.downloads}>
								<Icon name="MdFileDownload" size={24} />
								{formattedDownloadsCount}
							</li>
							<li className={styles.classTag}>
								<span>{modClassesMap.get(mod.classId)}</span>
							</li>
						</ul>
					</div>
				</div>
			</Link>
		</li>
	)
}

export default ModsCompilationItem
