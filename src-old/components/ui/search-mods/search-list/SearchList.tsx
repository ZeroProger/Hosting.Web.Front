import { FC } from 'react'

import { IMod } from '@/shared/types/curseforge.types'

import styles from './SearchList.module.scss'
import SearchListItem from './SearchListItem'

interface ISearchList {
	data: IMod[]
	showList: boolean
	searchTerm: string
}

const SearchList: FC<ISearchList> = ({ data: mods, searchTerm, showList }) => {
	return (
		<>
			{showList && (
				<div className={styles.container}>
					{mods.length === 0 && (
						<div className={styles.empty}>По запросу {`"${searchTerm}"`} ничего не найдено</div>
					)}
					{mods.map((mod) => (
						<SearchListItem key={mod.id} mod={mod} />
					))}
				</div>
			)}
		</>
	)
}

export default SearchList
