'use client'

import { ModCard } from '@/entities/mod/ui/card'

import { ModFilters } from '@/features/mod-filters'
import { ModSorting } from '@/features/mod-sorting/ui/mod-sorting'
import { SearchMods } from '@/features/search-mods'

import { SkeletonList } from '@/shared/ui/skeleton'

import { useSearchMods } from '../queries'

import { ModsSearchNotFound } from './not-found'
import styles from './styles.module.scss'

export function ModsSearch() {
	// const router = useRouter()

	// const [searchParams, setSearchParams] = useSearchParams({
	// 	classId: '',
	// 	categoryId: '',
	// 	modLoaderType: '',
	// })

	// const query = Object.fromEntries(searchParams.entries()) as any

	const { data: mods, isLoading } = useSearchMods()

	return (
		<div className={styles.container}>
			<div className={styles.search}>
				<SearchMods hideList />
			</div>
			<div className={styles.content}>
				<div className={styles.sidebar}>
					<ModFilters />
				</div>
				<div className={styles.results}>
					<ModSorting />
					<div className={styles.resultsMods}>
						{mods?.length === 0 && <ModsSearchNotFound />}
						<div className={styles.mods}>
							{isLoading && <SkeletonList count={24} height={280} />}
							{mods?.map((mod) => (
								<ModCard key={mod.id} mod={mod} />
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
