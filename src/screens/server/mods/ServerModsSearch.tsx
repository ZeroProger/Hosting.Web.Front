import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'
import Select, { OptionProps, components } from 'react-select'

import SearchMods from '@/components/ui/search-mods/SearchMods'

import { ICForgeMinecraftVersion } from '@/shared/types/curseforge.types'

import { getServerModSearchUrl, getServerModUrl } from '@/config/url.config'

import styles from './ServerModsSearch.module.scss'
import { useCategoriesByClassId } from './hooks/useCategoriesByClassId'
import { useGroupedCategories } from './hooks/useGroupedCategories'
import { useMinecraftVersions } from './hooks/useMinecraftVersions'
import { useSearchResults } from './useSearchResults'

interface IServerModsSearchProps {}

const ServerModsSearch: FC<IServerModsSearchProps> = () => {
	const router = useRouter()
	const query = router.query
	const { mods, isLoading, error } = useSearchResults()
	const { data: classes } = useGroupedCategories()
	const { categories } = useCategoriesByClassId()
	const { versions } = useMinecraftVersions()

	if (isLoading) return <div>Загрузка...</div>
	if (error) return <div>Ошибка: {JSON.stringify(error)}</div>

	const OptionVersion: FC<OptionProps<ICForgeMinecraftVersion>> = (props) => {
		const {
			data: { version },
		} = props
		return (
			<components.Option {...props}>
				<Link href={getServerModSearchUrl({ ...query, gameVersion: version })}>{version}</Link>
			</components.Option>
		)
	}
	return (
		<div className={styles.container}>
			<div className={styles.search}>
				<SearchMods />
			</div>
			<div>
				<div className="mb-10">
					<div>
						<Link href={getServerModSearchUrl({ ...query, classId: null!, categoryId: null! })}>
							All
						</Link>
						{classes?.map(({ classId, className }) => (
							<Link
								key={classId}
								href={getServerModSearchUrl({ ...query, classId, categoryId: null! })}
							>
								{className}
							</Link>
						))}
					</div>
					<div>
						{query?.classId &&
							categories?.map(({ id, name }) => (
								<Link key={id} href={getServerModSearchUrl({ ...query, categoryId: id })}>
									{name}
								</Link>
							))}
					</div>
					<div>
						{Object.entries({ forge: '1', fabric: '4' }).map(([ml, type]) => (
							<Link key={type} href={getServerModSearchUrl({ ...query, modLoaderType: +type })}>
								{ml}
							</Link>
						))}
					</div>
					<div>
						<Link href={getServerModSearchUrl({ ...query, gameVersion: null! })}>All</Link>
						{versions?.map(({ gameVersionId, version }) => (
							<Link
								key={gameVersionId}
								href={getServerModSearchUrl({ ...query, gameVersion: version })}
							>
								{version}
							</Link>
						))}
						<Select options={versions} components={{ Option: OptionVersion }}></Select>
					</div>
				</div>
				<div>
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
			</div>
		</div>
	)
}

export default ServerModsSearch
