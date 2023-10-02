import { useStore } from 'effector-react'
import { useRouter, useSearchParams } from 'next/navigation'

import { searchModsBaseRequest } from '@/shared/config/mods'
import { ModUrls } from '@/shared/routes/urls'
import { $serverHash } from '@/shared/store'

import styles from './styles.module.scss'

export function ModsSearchNotFound() {
	const router = useRouter()
	const searchParams = useSearchParams()
	const serverHash = useStore($serverHash)

	const searchFilter = searchParams.get('searchFilter')

	const handleClearFilters = () => {
		router.replace(ModUrls.search(serverHash!, { ...searchModsBaseRequest }))
	}

	return (
		<div className={styles.notFound}>
			<span>
				По запросу <span>&quot;{searchFilter}&quot;</span> не найдено результатов
			</span>
			<span>Проверьте написание или очистите фильтры</span>
			{/* #TODO: перенести searchTerm в modsSearch в effector store, переписать хуки на новую реализацию, тогда очистка фильтров полноценно заработает.*/}
			{/* <Button variant="outline" onClick={handleClearFilters} className="text-lg border-2 py-2 px-4">
				Очистить фильтры
			</Button> */}
		</div>
	)
}
