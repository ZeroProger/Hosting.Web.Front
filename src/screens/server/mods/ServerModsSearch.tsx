import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

import Breadcrumbs from '@/components/ui/breadcrumbs/Breadcrumbs'
import SearchMods from '@/components/ui/search-mods/SearchMods'

import { getServerModSearchUrl, getServerModUrl } from '@/config/url.config'

import styles from './ServerModsSearch.module.scss'
import { useGroupedCategories } from './hooks/useGroupedCategories'
import { useSearchResults } from './useSearchResults'

interface IServerModsSearchProps {}

const ServerModsSearch: FC<IServerModsSearchProps> = () => {
	const router = useRouter()
	const { data: mods, isSuccess } = useSearchResults()
	// console.log(data)
	const { data: groups } = useGroupedCategories()
	// console.log(categories)
	console.log(router.query)

	return (
		<div className={styles.container}>
			<Breadcrumbs />
			<SearchMods />
			<div className="flex">
				<div>
					{mods?.map(({ name, id }) => (
						<Link href={getServerModUrl(id.toString())} key={id}>
							{name}
						</Link>
					))}
				</div>
				<div>
					{groups?.map(({ categories, classId, className }) => (
						<div key={classId}>
							<h1>
								<Link
									href={getServerModSearchUrl({
										classId,
									})}
								>
									{className}
								</Link>
							</h1>
							{categories.map(({ name, id }) => (
								<div key={id} onClick={() => {}}>
									{name}
								</div>
							))}
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default ServerModsSearch
