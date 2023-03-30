import { useRouter } from 'next/router'
import { FC, useState } from 'react'

import useOutside from '@/hooks/useOutside'

import { getServerModSearchUrl } from '@/config/url.config'

import { Icon } from '../Icon'

import styles from './SearchMods.module.scss'
import SearchList from './search-list/SearchList'
import { useSearch } from './useSearch'

interface ISearchMods {}

const SearchMods: FC<ISearchMods> = () => {
	const { push } = useRouter()
	const { isSuccess, handleInput, resetSearch, data: mods, searchTerm } = useSearch()
	const handleSearch = () => {
		push(getServerModSearchUrl(searchTerm ? { searchFilter: searchTerm } : {}))
	}
	// const { ref, isFocused } = useOutside(true)
	const [isFocused, setIsFocused] = useState(false)
	return (
		<div className={styles.container}>
			<div className={styles.searchInput}>
				<input
					type="search"
					className={styles.searchInputField}
					value={searchTerm}
					onChange={handleInput}
					onFocus={() => setIsFocused(true)}
					onBlur={() => setIsFocused(false)}
				/>
				<button className={styles.searchInputBtn} onClick={handleSearch}>
					<Icon name="MdSearch" size={24}></Icon>
				</button>
			</div>
			{isSuccess && isFocused && <SearchList data={mods || []} />}
		</div>
	)
}

export default SearchMods
