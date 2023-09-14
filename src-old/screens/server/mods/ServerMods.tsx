import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, useRef, useState } from 'react'
import Joyride from 'react-joyride'

import ModsCompilation from '@/components/mods-compilation/ModsCompilation'
import { Icon } from '@/components/ui/Icon'
import SearchMods from '@/components/ui/search-mods/SearchMods'
import SkeletonLoaderList from '@/components/ui/skeleton-loader/SkeletonLoaderList'

import useLocalStorage from '@/hooks/useLocalStorage'
import useOnClickOutside from '@/hooks/useOnClickOutside'

import { CForgeModClassType } from '@/shared/types/curseforge.types'

import Meta from '@/utils/meta/Meta'

import { joyrideStylesOptions, joyrideStylesTooltip } from '@/config/constants'
import { getServerModSearchUrl, getServerModUrl } from '@/config/url.config'

import styles from './ServerMods.module.scss'
import { useGroupedCategories } from './hooks/useGroupedCategories'
import { usePopularModpacks } from './hooks/usePopularModpacks'
import { usePopularMods } from './hooks/usePopularMods'
import { usePopularPlugins } from './hooks/usePopularPlugins'
import { usePopularResourcePacks } from './hooks/usePopularResourcePacks'
import { usePopularWorlds } from './hooks/usePopularWorlds'

interface IServerMods {}

const ServerMods: FC<IServerMods> = () => {
	const { data: groupedCategories } = useGroupedCategories()
	const router = useRouter()
	const mods = usePopularMods()
	const modpacks = usePopularModpacks()
	const resourcePacks = usePopularResourcePacks()
	const worlds = usePopularWorlds()
	const plugins = usePopularPlugins()

	const [classesOpen, setClassesOpen] = useState(false)
	const [classesExpanded, setClassesExpanded] = useState(false)
	const [isGuideCompleted, setIsGuideCompleted] = useLocalStorage('isGuideCompleted', false)

	const classesRef = useRef(null)

	const handleClassesOpen = () => {
		setClassesOpen((prev) => !prev)
	}

	const handleClickOutside = () => {
		setClassesOpen(false)
	}

	const handleClassesExpand = () => {
		setClassesExpanded(true)
	}

	useOnClickOutside(classesRef, handleClickOutside)

	return (
		//#TODO: Придумать описание
		<>
			<Joyride
				scrollOffset={150}
				run={mods.data?.length !== 0 && !isGuideCompleted}
				disableOverlayClose
				hideCloseButton
				hideBackButton
				continuous
				callback={({ status }) =>
					status === 'finished' && router.push(getServerModUrl(`${mods.data?.[0].id}`))
				}
				styles={{ options: joyrideStylesOptions, tooltip: joyrideStylesTooltip }}
				steps={[
					{
						content:
							'На данной странице собраны подборки различных популярных модификаций для вашего сервера: моды, модпаки, миры, плагины и т.д. Всё это может быть установлено в пару кликов',
						target: '#mods-compilation-step',
						disableBeacon: true,
						placement: 'auto',
						locale: { last: <strong>Дальше</strong> },
						styles: {
							options: { width: 600 },
						},
					},
				]}
			/>
			<Meta title="Подборки модов" description="Подборки модов">
				<div className={styles.container}>
					{groupedCategories ? (
						<nav className={styles.modNav}>
							<div
								className={clsx(
									styles.classes,
									{ [styles.isOpen]: classesOpen },
									{ [styles.isExpanded]: classesExpanded }
								)}
								ref={classesRef}
							>
								<button className={styles.classesOpen} onClick={handleClassesOpen}>
									Категории
									<Icon name="MdKeyboardArrowDown" size={28} color="#fff" />
								</button>
								<div className={styles.classesMenu}>
									<ul>
										{groupedCategories?.map((group) => (
											<li key={group.className}>
												<div className={styles.group}>
													<ul className={styles.categories}>
														<h3 className={styles.class}>
															<Link href={getServerModSearchUrl({ classId: group.classId })}>
																{group.className}
																<Icon name="MdKeyboardArrowRight" size={24} color="#fff" />
															</Link>
														</h3>
														{group.categories.map((category) => (
															<li key={category.id}>
																<Link
																	href={getServerModSearchUrl({
																		classId: group.classId,
																		categoryId: category.id,
																	})}
																>
																	{category.name}
																</Link>
															</li>
														))}
													</ul>
												</div>
											</li>
										))}
									</ul>
									<button
										type="button"
										className={styles.classesExpand}
										onClick={handleClassesExpand}
									>
										Посмотреть все
									</button>
								</div>
							</div>
							<div className={styles.divider}></div>
							<div className={styles.search}>
								<SearchMods />
							</div>
						</nav>
					) : (
						<div className="w-full">
							<SkeletonLoaderList count={1} height={56} />
						</div>
					)}
					<div id="mods-compilation-step">
						<ModsCompilation
							title="Популярные моды"
							link={getServerModSearchUrl({ classId: CForgeModClassType.Mods })}
							mods={mods.data || []}
						/>
					</div>
					<ModsCompilation
						title="Популярные модпаки"
						link={getServerModSearchUrl({ classId: CForgeModClassType.Modpacks })}
						mods={modpacks.data || []}
					/>
					<ModsCompilation
						title="Популярные миры"
						link={getServerModSearchUrl({ classId: CForgeModClassType.Worlds })}
						mods={worlds.data || []}
					/>
					<ModsCompilation
						title="Популярные ресурс-паки"
						link={getServerModSearchUrl({ classId: CForgeModClassType.ResourcePacks })}
						mods={resourcePacks.data || []}
					/>
					<ModsCompilation
						title="Популярные Bukkit плагины"
						link={getServerModSearchUrl({ classId: CForgeModClassType.BukkitPlugins })}
						mods={plugins.data || []}
					/>
				</div>
			</Meta>
		</>
	)
}

export default ServerMods
