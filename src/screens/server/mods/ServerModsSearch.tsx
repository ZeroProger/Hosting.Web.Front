import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'
import Select, { OnChangeValue, OptionProps, components } from 'react-select'

import { ModCard } from '@/components/mod-card/ModCard'
import { IOption } from '@/components/ui/customSelect/CustomSelect'
import SubHeading from '@/components/ui/heading/SubHeading'
import SearchMods from '@/components/ui/search-mods/SearchMods'

import Meta from '@/utils/meta/Meta'

import { getServerModSearchUrl, getServerModUrl } from '@/config/url.config'

import styles from './ServerModsSearch.module.scss'
import { useCategoriesByClassId } from './hooks/useCategoriesByClassId'
import { useGroupedCategories } from './hooks/useGroupedCategories'
import { useMinecraftVersions } from './hooks/useMinecraftVersions'
import { useSearchResults } from './useSearchResults'

const sortOptions: IOption[] = [
	{ label: 'Совпадению', value: '1' },
	{ label: 'Популярности', value: '2' },
	{ label: 'Последнему обновлению', value: '3' },
	{ label: 'Количеству скачиваний', value: '6' },
	{ label: 'Названию', value: '4' },
]

var modLoaders: { label: string; type: string }[] = [
	{ label: 'Любой', type: '0' },
	{ label: 'Forge', type: '1' },
	{ label: 'Fabric', type: '4' },
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

	useEffect(() => {}, [])

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
			<components.Option
				{...props}
				className="custom-select__option--link custom-select__option--link--small"
			>
				<Link href={getServerModSearchUrl({ ...query, sortField: +value })}>{label}</Link>
			</components.Option>
		)
	}

	const onModLinkClick = (event: any) => {
		if (
			event.target.nodeName === 'BUTTON' ||
			event.target.nodeName === 'path' ||
			event.target.nodeName === 'svg'
		)
			event.preventDefault()
	}

	return (
		//#TODO: Придумать описание
		<Meta title="Поиск модов" description="Поиск модов">
			<div className={styles.container}>
				<div className={styles.search}>
					<SearchMods />
				</div>
				<div className={styles.content}>
					<div className={styles.sidebar}>
						<div className={styles.filters}>
							<div className={styles.filterBlock}>
								<SubHeading className={styles.filterTitle} text="Искать среди" />
								<div className={styles.filterOptions}>
									<Link
										href={getServerModSearchUrl({ ...query, classId: null!, categoryId: null! })}
										className={clsx(styles.filterLink, {
											[styles.filterLinkActive]: query.classId === undefined,
										})}
									>
										All
									</Link>
									{classes?.map(({ classId, className }) => (
										<Link
											key={classId}
											href={getServerModSearchUrl({ ...query, classId, categoryId: null! })}
											className={clsx(styles.filterLink, {
												[styles.filterLinkActive]: classId === parseInt(String(query.classId)),
											})}
										>
											{className}
										</Link>
									))}
								</div>
							</div>
							{query?.classId && (
								<div className={styles.filterBlock}>
									<SubHeading className={styles.filterTitle} text="Категории" />
									<div className={clsx(styles.filterOptions, styles.filterOptionsCategories)}>
										{categories?.map(({ id: categoryId, name }) => (
											<Link
												key={categoryId}
												href={getServerModSearchUrl({ ...query, categoryId: categoryId })}
												className={clsx(styles.filterLink, {
													[styles.filterLinkActive]:
														categoryId === parseInt(String(query.categoryId)),
												})}
											>
												{name}
											</Link>
										))}
									</div>
								</div>
							)}
							<div className={styles.filterBlock}>
								<SubHeading className={styles.filterTitle} text="Ядра" />
								<div className={styles.filterOptions}>
									{modLoaders.map(({ label, type }) => (
										<Link
											key={type}
											href={getServerModSearchUrl({ ...query, modLoaderType: type })}
											className={clsx(styles.filterLink, {
												[styles.filterLinkActive]: type === String(query.modLoaderType || 0),
											})}
										>
											{label}
										</Link>
									))}
								</div>
							</div>
							<div className={styles.filterBlock}>
								<SubHeading className={styles.filterTitle} text="Версии" />
								<div className={styles.filterOptions}>
									<Select
										className="custom-select-container z-10000"
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
					</div>
					<div className={styles.results}>
						<SubHeading className={styles.resultsTitle} text="Найдено 479 модификаций" />
						<div className={styles.resultsOptions}>
							<div className={styles.sort}>
								<SubHeading className={styles.sortTitle} text="Сортировать по" />
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
						<div className={styles.resultsMods}>
							{mods && mods.length > 0 ? (
								<div className={styles.mods}>
									{mods.map((mod) => (
										<Link
											key={mod.id}
											className={styles.mod}
											onClick={onModLinkClick}
											href={getServerModUrl(mod.id.toString())}
										>
											<ModCard
												mod={mod}
												modClass={classes?.find(
													({ classId }) => classId === parseInt(String(query.classId))
												)}
											/>
										</Link>
									))}
								</div>
							) : (
								<div className={styles.notFound}>Не найдено :(</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</Meta>
	)
}

export default ServerModsSearch
