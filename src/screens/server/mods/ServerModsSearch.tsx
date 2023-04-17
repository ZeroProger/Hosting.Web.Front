import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'
import Select, { OnChangeValue, OptionProps, components } from 'react-select'

import { ModCard } from '@/components/mod-card/ModCard'
import { IOption } from '@/components/ui/customSelect/CustomSelect'
import SearchMods from '@/components/ui/search-mods/SearchMods'

import { getServerModSearchUrl, getServerModUrl } from '@/config/url.config'

import styles from './ServerModsSearch.module.scss'
import { useCategoriesByClassId } from './hooks/useCategoriesByClassId'
import { useGroupedCategories } from './hooks/useGroupedCategories'
import { useMinecraftVersions } from './hooks/useMinecraftVersions'
import { useSearchResults } from './useSearchResults'

const sortOptions: IOption[] = [
	{ label: 'совпадению', value: '1' },
	{ label: 'популярности', value: '2' },
	{ label: 'последнему обновлению', value: '3' },
	{ label: 'количеству скачиваний', value: '6' },
	{ label: 'названию', value: '4' },
]

const ServerModsSearch: FC = () => {
	const router = useRouter()
	const query = router.query
	const { mods, isLoading, error } = useSearchResults()
	const { data: classes } = useGroupedCategories()
	const { categories } = useCategoriesByClassId()
	const { versions, isVLoading } = useMinecraftVersions()
	const [curVersion, setCurVersion] = useState<IOption>()
	const [curSortField, setCurSortField] = useState<IOption>()

	useEffect(() => {
		setCurVersion({
			label: (query?.gameVersion as string) ?? 'All',
			value: (query?.gameVersion as string) ?? null!,
		})
		setCurSortField({
			value: query?.sortField as string,
			label: sortOptions.find(({ value }) => value === (query?.sortField as string))?.label!,
		})
	}, [query])

	if (isLoading) return <div>Загрузка...</div>
	if (error) return <div>Ошибка: {JSON.stringify(error)}</div>

	const OptionVersion: FC<OptionProps<IOption>> = (props) => {
		const {
			data: { label, value },
		} = props
		return (
			<components.Option {...props}>
				<Link href={getServerModSearchUrl({ ...query, gameVersion: value })}>{label}</Link>
			</components.Option>
		)
	}

	const SortOption: FC<OptionProps<IOption>> = (props) => {
		const {
			data: { label, value },
		} = props
		return (
			<components.Option {...props}>
				<Link href={getServerModSearchUrl({ ...query, sortField: +value })}>{label}</Link>
			</components.Option>
		)
	}

	return (
		<div className={styles.container}>
			<div className={styles.search}>
				<SearchMods />
			</div>
			<div className={styles.content}>
				<div className={styles.sidebar}>
					<div className={styles.filters}>
						<div className={styles.classes}>
							<h1 className={styles.title}> Искать среди:</h1>
							<Link
								href={getServerModSearchUrl({ ...query, classId: null!, categoryId: null! })}
								className={styles.filterLink}
							>
								All
							</Link>
							{classes?.map(({ classId, className }) => (
								<Link
									key={classId}
									href={getServerModSearchUrl({ ...query, classId, categoryId: null! })}
									className={styles.filterLink}
								>
									{className}
								</Link>
							))}
						</div>
						{query?.classId && (
							<div className={styles.categories}>
								<h1 className={styles.title}>Категории:</h1>
								{categories?.map(({ id, name }) => (
									<Link
										key={id}
										href={getServerModSearchUrl({ ...query, categoryId: id })}
										className={styles.filterLink}
									>
										{name}
									</Link>
								))}
							</div>
						)}
						<div className={styles.modloaders}>
							<h1 className={styles.title}>Ядра:</h1>
							<Link
								href={getServerModSearchUrl({ ...query, modLoaderType: null! })}
								className={styles.filterLink}
							>
								All
							</Link>
							{Object.entries({ forge: '1', fabric: '4' }).map(([ml, type]) => (
								<Link
									key={type}
									href={getServerModSearchUrl({ ...query, modLoaderType: +type })}
									className={styles.filterLink}
								>
									{ml}
								</Link>
							))}
						</div>
						<div className={styles.versions}>
							<h1 className={styles.title}>Версии:</h1>
							<Select
								className="custom-select-container"
								classNamePrefix="custom-select"
								options={[
									{ label: 'All', value: null! },
									...(!isVLoading
										? versions?.map(({ version }) => ({ label: version, value: version }))!
										: []),
								]}
								components={{ Option: OptionVersion }}
								value={curVersion}
								onChange={(newValue: OnChangeValue<IOption, boolean>) =>
									setCurVersion(newValue as IOption)
								}
							/>
						</div>
					</div>
				</div>
				<div className={styles.results}>
					<div>
						<div>10000 проектов найдено</div>
						<div className={styles.sort}>
							<h1>Сортировать по</h1>
							<div className={styles.sortFields}>
								<Select
									className="custom-select-container"
									classNamePrefix="custom-select"
									options={sortOptions}
									components={{ Option: SortOption }}
									value={curSortField}
									onChange={(newValue: OnChangeValue<IOption, boolean>) => {
										setCurSortField(newValue as IOption)
									}}
								/>
							</div>
						</div>
					</div>
					<div>
						{mods ? (
							<div className={styles.mods}>
								{mods.map((mod) => (
									<div key={mod.id} className={styles.mod}>
										<Link href={getServerModUrl(mod.id.toString())}>
											<ModCard mod={mod} />
										</Link>
									</div>
								))}
							</div>
						) : (
							<div className={styles.notFound}></div>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default ServerModsSearch
