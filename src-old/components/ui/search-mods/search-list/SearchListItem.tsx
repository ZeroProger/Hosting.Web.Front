import Link from 'next/link'
import { FC } from 'react'

import { IMod } from '@/shared/types/curseforge.types'

import { getServerModUrl } from '@/config/url.config'

import styles from './SearchListItem.module.scss'

interface ISearchListItem {
	mod: IMod
}

const SearchListItem: FC<ISearchListItem> = ({ mod }) => {
	return (
		<Link href={getServerModUrl(mod.id.toString())} className={styles.link}>
			{mod.name}
		</Link>
	)
}

export default SearchListItem
