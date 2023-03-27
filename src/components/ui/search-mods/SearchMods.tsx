import { FC } from 'react'

import { Icon } from '../Icon'

import styles from './SearchMods.module.scss'

interface ISearchMods {}

const SearchMods: FC<ISearchMods> = () => {
	return (
		<div className={styles.searchInput}>
			<input type="search" className={styles.searchInputField} />
			<button className={styles.searchInputBtn}>
				<Icon name="MdSearch" size={24}></Icon>
			</button>
		</div>
	)
}

export default SearchMods
