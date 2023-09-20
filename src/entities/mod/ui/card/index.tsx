import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import numeral from 'numeral'

import { Mod } from '@/shared/api/curse-forge'
import { modClassesMap } from '@/shared/config/mods'
import { ModUrls } from '@/shared/routes/urls'
import { Icon } from '@/shared/ui/icon'

import styles from './styles.module.scss'

export function ModCard({ mod }: { mod: Mod }) {
	const numeralOptions = mod.downloadCount < 1000 ? '' : '0.0a'
	const formattedDownloadsCount = numeral(mod.downloadCount).format(numeralOptions).toUpperCase()

	return (
		<li className={styles.card}>
			<Link href={ModUrls.mod(mod.id)}>
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
