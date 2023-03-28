import { FC } from 'react'

import { Icon } from '../Icon'

import styles from './SearchMods.module.scss'
import SearchList from './search-list/SearchList'
import { useSearch } from './useSearch'

interface ISearchMods {}

const SearchMods: FC<ISearchMods> = () => {
	const { isSuccess, handleSearch, resetSearch, data: mods, searchTerm } = useSearch()

	return (
		<div className={styles.container}>
			<div className={styles.searchInput}>
				<input
					type="search"
					className={styles.searchInputField}
					value={searchTerm}
					onChange={handleSearch}
				/>
				<button className={styles.searchInputBtn}>
					<Icon name="MdSearch" size={24}></Icon>
				</button>
			</div>
			{isSuccess && <SearchList data={mods || []} />}
		</div>
	)
}

export default SearchMods
