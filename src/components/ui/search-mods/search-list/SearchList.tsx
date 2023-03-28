import { FC } from 'react'

import { IMod } from '@/shared/types/curseforge.types'

import styles from './SearchList.module.scss'
import SearchListItem from './SearchListItem'

interface ISearchList {
	data: IMod[]
}

const SearchList: FC<ISearchList> = ({ data: mods }) => {
	return (
		<div className={styles.container}>
			{mods.map((mod) => (
				<SearchListItem key={mod.id} mod={mod} />
			))}
		</div>
	)
}

export default SearchList
