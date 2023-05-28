import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, useRef, useState } from 'react'

import useOnClickOutside from '@/hooks/useOnClickOutside'

import { getServerModSearchUrl } from '@/config/url.config'

import { Icon } from '../Icon'

import styles from './SearchMods.module.scss'
import SearchList from './search-list/SearchList'
import { useSearch } from './useSearch'

const SearchMods: FC = () => {
	const { isSuccess, handleSearch, resetSearch, data: mods, searchTerm } = useSearch()
	const [showList, setShowList] = useState(false)
	const ref = useRef(null)
	const { query } = useRouter()

	const handleClickOutside = () => setShowList(false)

	const handleInputFocus = () => setShowList(true)

	useOnClickOutside(ref, handleClickOutside)

	return (
		<div className={styles.container} ref={ref}>
			<div className={styles.searchInput}>
				<input
					type="search"
					className={styles.searchInputField}
					defaultValue={String(query.searchFilter || '')}
					onChange={handleSearch}
					onFocus={handleInputFocus}
				/>
				<Link
					className={styles.searchInputBtn}
					href={
						searchTerm.length > 0
							? getServerModSearchUrl({ searchFilter: searchTerm })
							: getServerModSearchUrl()
					}
				>
					<Icon name="MdSearch" size={24}></Icon>
				</Link>
			</div>
			{isSuccess && <SearchList data={mods || []} searchTerm={searchTerm} showList={showList} />}
		</div>
	)
}

export default SearchMods
