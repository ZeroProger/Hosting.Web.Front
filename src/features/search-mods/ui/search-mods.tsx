'use client'

import { useStore } from 'effector-react'
import { Search } from 'lucide-react'
import Link from 'next/link'

import { useClickOutside } from '@/shared/hooks'
import { ModUrls } from '@/shared/routes/urls'
import { $serverHash } from '@/shared/store'
import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input'

import { useSearchMods } from '../hooks'

import { SearchModsResults } from './search-mods-results'
import styles from './styles.module.scss'

export function SearchMods({ hideList = false }: { hideList?: boolean }) {
	const serverHash = useStore($serverHash)

	const { mods, searchTerm, showList, containerRef, functions } = useSearchMods(hideList)

	const { handleSearch, handleClickOutside, handleInputFocus, handleSearchEnterPress } = functions

	useClickOutside(containerRef, handleClickOutside)

	return (
		<div className={styles.container} ref={containerRef}>
			<div className={styles.searchInput}>
				<Input
					type="search"
					placeholder="Поиск модов"
					className="w-full text-xl px-6 border-border border-2 text-white bg-card focus:border-primary h-auto rounded-r-none focus-visible:ring-0 focus-visible:ring-offset-0"
					value={searchTerm}
					onChange={handleSearch}
					onKeyDown={handleSearchEnterPress}
					onFocus={handleInputFocus}
				/>
				<Button
					asChild
					variant="primary"
					className="rounded-l-none h-auto p-4 focus-visible:ring-0 focus-visible:ring-offset-0"
				>
					<Link
						href={
							searchTerm.length > 0
								? ModUrls.search(serverHash!, { searchFilter: searchTerm })
								: ModUrls.search(serverHash!)
						}
					>
						<Search size={28} />
					</Link>
				</Button>
			</div>
			{mods && mods.length > 0 && !hideList && (
				<SearchModsResults mods={mods || []} searchTerm={searchTerm} showList={showList} />
			)}
		</div>
	)
}
