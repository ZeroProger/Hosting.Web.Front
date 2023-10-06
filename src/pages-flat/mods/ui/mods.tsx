'use client'

import clsx from 'clsx'
import { useStore } from 'effector-react'
import { ChevronDown, ChevronRight } from 'lucide-react'
import Link from 'next/link'

import { SearchMods } from '@/features/search-mods'

import { useGroupedCategories } from '@/shared/queries/mod'
import { ModUrls } from '@/shared/routes/urls'
import { $serverHash } from '@/shared/store'
import { Skeleton } from '@/shared/ui/skeleton'

import {
	ModpacksCompilation,
	ModsCompilation,
	PluginsCompilation,
	WorldsCompilation,
} from '@/widgets/mods-compilation'

import { useMods } from '../hooks'

import styles from './styles.module.scss'

export function Mods() {
	const serverHash = useStore($serverHash)

	const { data: groupedCategories } = useGroupedCategories()
	const { classesOpen, classesExpanded, classesRef, functions } = useMods()

	const { handleClassesOpen, handleClassesExpand } = functions

	return (
		<>
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
								<ChevronDown size={28} />
							</button>
							<div className={styles.classesMenu}>
								<ul>
									{groupedCategories?.map((group) => (
										<li key={group.className}>
											<div className={styles.group}>
												<ul>
													<h3>
														<Link
															href={ModUrls.search(serverHash!, {
																classId: group.classId,
															})}
														>
															{group.className}
															<ChevronRight size={24} />
														</Link>
													</h3>
													{group.categories.map((category) => (
														<li key={category.id}>
															<Link
																href={ModUrls.search(serverHash!, {
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
						<Skeleton className="h-[56px]" />
					</div>
				)}
				<div className={styles.compilations}>
					<ModsCompilation />
					<ModpacksCompilation />
					<PluginsCompilation />
					<WorldsCompilation />
				</div>
			</div>
		</>
	)
}
