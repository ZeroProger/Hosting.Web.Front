import Image from 'next/image'
import { FC } from 'react'

import { IMod as IModCardProps } from '@/shared/types/curseforge.types'

import { russifyUTC } from '@/utils/string/russifyUTC'

import { modClassesMap } from '@/config/curseforge-api.config'

import { Icon } from '../ui/Icon'

import styles from './ModCard.module.scss'

export const ModCard: FC<IModCardProps> = ({
	logo,
	name,
	authors,
	summary,
	downloadCount,
	dateCreated,
	dateModified,
	classId,
	categories,
}) => {
	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<Image src={logo.thumbnailUrl} alt={name} width={144} height={144} />
				<div className={styles.info}>
					<h1>
						{name} | by {authors[0].name}
					</h1>
					<p>{summary}</p>
					<div className={styles.numbers}>
						<div className={styles.number}>
							<Icon name="MdFileDownload" size={24} className={styles.icon} />
							{downloadCount}
						</div>
						<div className={styles.number}>
							<Icon name="MdDateRange" size={24} className={styles.icon} />
							{russifyUTC(dateCreated)}
						</div>
						<div className={styles.number}>
							<Icon name="RiTimeFill" size={24} className={styles.icon} />
							{russifyUTC(dateModified)}
						</div>
					</div>
				</div>
			</div>
			<div className={styles.classification}>
				<div>{modClassesMap.get(classId)}</div>
				{categories.map(({ name, id }) => (
					<div key={id} className={styles.category}>
						{name}
					</div>
				))}
			</div>
		</div>
	)
}
