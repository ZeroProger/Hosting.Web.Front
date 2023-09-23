'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

import { useClickOutside } from '@/shared/hooks'
import { ModUrls } from '@/shared/routes/urls'
import { Button } from '@/shared/ui/button'
import { Icon } from '@/shared/ui/icon'
import { Input } from '@/shared/ui/input'

import { useSearchMods } from '../hooks'

import { SearchModsResults } from './search-mods-results'
import styles from './styles.module.scss'

export function SearchMods() {
	const { mods, isSuccess, searchTerm, showList, containerRef, functions } = useSearchMods()

	const { handleSearch, handleClickOutside, handleInputFocus } = functions

	const searchParams = useSearchParams()

	useClickOutside(containerRef, handleClickOutside)

	return (
		<div className={styles.container} ref={containerRef}>
			<div className={styles.searchInput}>
				<Input
					type="search"
					placeholder="Поиск модов"
					className="w-full text-xl px-6 border-border border-2 text-white bg-card focus:border-primary h-auto rounded-none focus-visible:ring-0 focus-visible:ring-offset-0"
					defaultValue={String(searchParams.get('searchFilter') || '')}
					onChange={handleSearch}
					onFocus={handleInputFocus}
				/>
				<Button
					asChild
					variant="primary"
					className="rounded-none h-auto p-4 focus-visible:ring-0 focus-visible:ring-offset-0"
				>
					<Link
						className={styles.searchInputBtn}
						href={
							searchTerm.length > 0
								? ModUrls.search({ searchFilter: searchTerm })
								: ModUrls.search()
						}
					>
						<Icon name="MdSearch" size={28}></Icon>
					</Link>
				</Button>
			</div>
			{isSuccess && (
				<SearchModsResults mods={mods || []} searchTerm={searchTerm} showList={showList} />
			)}
		</div>
	)
}
