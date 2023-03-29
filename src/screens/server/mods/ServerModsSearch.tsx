import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'

import SearchMods from '@/components/ui/search-mods/SearchMods'

import { useModsSearch } from '@/hooks/useModsSearch'

import { ISearchModsRequest } from '@/shared/types/requests/curseforge-requests.types'

import { searchModsBaseRequest } from '@/config/curseforge-api.config'
import { getServerModUrl } from '@/config/url.config'

import styles from './ServerModsSearch.module.scss'

interface IServerModsSearch {}

const ServerModsSearch: FC<IServerModsSearch> = () => {
	const router = useRouter()
	const query = router.query
	const [request, setRequest] = useState<ISearchModsRequest>(searchModsBaseRequest)
	const { data: mods, isLoading, error } = useModsSearch(request)

	useEffect(() => {
		if (query) {
			setRequest((prev) => {
				return { ...prev, ...query }
			})
		}
	}, [query])

	if (isLoading) return <div>Загрузка...</div>
	if (error) return <div>Ошибка: {JSON.stringify(error)}</div>

	return (
		<div className={styles.container}>
			<div className={styles.search}>
				<SearchMods />
			</div>
			{mods ? (
				<div className={styles.mods}>
					{mods.map((mod) => (
						<div key={mod.id} className={styles.mod}>
							<Link href={getServerModUrl(mod.id.toString())}>{mod.name}</Link>
						</div>
					))}
				</div>
			) : (
				<div className={styles.notFound}></div>
			)}
		</div>
	)
}

export default ServerModsSearch
