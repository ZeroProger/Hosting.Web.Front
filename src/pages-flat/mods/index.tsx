'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { CallBackProps } from 'react-joyride'

import { SearchMods } from '@/features/mod/ui'

import { CForgeModClassType } from '@/shared/config/curse-forge'
import {
	popularModpacksRequest,
	popularModsRequest,
	popularPluginsRequest,
	popularResourcePacksRequest,
	popularWorldsRequest,
} from '@/shared/config/mods'
import { JoyrideGuide, modsSteps } from '@/shared/lib/react-joyride'
import { ModUrls } from '@/shared/routes/urls'
import { Icon } from '@/shared/ui/icon'
import { Skeleton } from '@/shared/ui/skeleton'

import { ModsCompilation } from '@/widgets/mod'

import { useGroupedCategories, useMods } from './lib'
import { useFilteredMods } from './lib/use-filtered-mods'
import styles from './styles.module.scss'

export function Mods() {
	const router = useRouter()

	const { data: groupedCategories } = useGroupedCategories()
	const { classesOpen, classesExpanded, classesRef, functions } = useMods()

	const { handleClassesOpen, handleClassesExpand } = functions

	//#TODO: можно покрасивее сделать, вынести в отдельные 5 компонентов типа:
	//PopularModpacksCompilation, ....
	const { data: mods, isLoading: isModsLoading } = useFilteredMods(popularModsRequest, 'mods')
	const { data: modpacks } = useFilteredMods(popularModpacksRequest, 'modpacks')
	const { data: worlds } = useFilteredMods(popularWorldsRequest, 'worlds')
	const { data: plugins } = useFilteredMods(popularPluginsRequest, 'plugins')
	const { data: resourcePacks } = useFilteredMods(popularResourcePacksRequest, 'resourcePacks')

	const joyrideModsCallback = ({ status }: CallBackProps) => {
		if (status === 'finished') {
			router.push(ModUrls.mod(mods?.[0].id!))
		}
	}

	return (
		<>
			<JoyrideGuide
				steps={modsSteps}
				callback={joyrideModsCallback}
				scrollOffset={150}
				run={mods && mods.length > 0}
			/>
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
														<Link href={ModUrls.search({ classId: group.classId })}>
															{group.className}
															<Icon name="MdKeyboardArrowRight" size={24} color="#fff" />
														</Link>
													</h3>
													{group.categories.map((category) => (
														<li key={category.id}>
															<Link
																href={ModUrls.search({
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
						<Skeleton className="h-[56px] rounded-layout" />
					</div>
				)}
				<div id="mods-compilation-step">
					<ModsCompilation
						title="Популярные моды"
						viewAllLink={ModUrls.search({ classId: CForgeModClassType.Mods })}
						mods={mods || []}
					/>
				</div>
				<ModsCompilation
					title="Популярные сборки модов"
					viewAllLink={ModUrls.search({ classId: CForgeModClassType.Modpacks })}
					mods={modpacks || []}
				/>
				<ModsCompilation
					title="Популярные миры"
					viewAllLink={ModUrls.search({ classId: CForgeModClassType.Worlds })}
					mods={worlds || []}
				/>
				<ModsCompilation
					title="Популярные плагины"
					viewAllLink={ModUrls.search({ classId: CForgeModClassType.BukkitPlugins })}
					mods={plugins || []}
				/>
				<ModsCompilation
					title="Популярные пакеты ресурсов"
					viewAllLink={ModUrls.search({ classId: CForgeModClassType.ResourcePacks })}
					mods={resourcePacks || []}
				/>
			</div>
		</>
	)
}
