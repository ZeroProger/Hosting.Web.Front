import { FC, useRef, useState } from 'react'

import useOnClickOutside from '@/hooks/useOnClickOutside'

import { Icon } from '../Icon'

import styles from './SearchMods.module.scss'
import SearchList from './search-list/SearchList'
import { useSearch } from './useSearch'

interface ISearchMods {}

const SearchMods: FC<ISearchMods> = () => {
	const { isSuccess, handleSearch, resetSearch, data: mods, searchTerm } = useSearch()
	const [showList, setShowList] = useState(false)
	const ref = useRef(null)

	const handleClickOutside = () => setShowList(false)

	const handleInputFocus = () => setShowList(true)

	useOnClickOutside(ref, handleClickOutside)

	return (
		<div className={styles.container} ref={ref}>
			<div className={styles.searchInput}>
				<input
					type="search"
					className={styles.searchInputField}
					value={searchTerm}
					onChange={handleSearch}
					onFocus={handleInputFocus}
				/>
				<button className={styles.searchInputBtn}>
					<Icon name="MdSearch" size={24}></Icon>
				</button>
			</div>
			{isSuccess && <SearchList data={mods || []} searchTerm={searchTerm} showList={showList} />}
		</div>
	)
}

export default SearchMods
