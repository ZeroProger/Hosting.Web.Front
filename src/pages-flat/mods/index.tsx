'use client'

import clsx from 'clsx'
import Link from 'next/link'

import { ModUrls } from '@/shared/routes/urls'
import { Icon } from '@/shared/ui/icon'
import { Skeleton } from '@/shared/ui/skeleton'

import { useGroupedCategories, useMods } from './lib'
import styles from './styles.module.scss'

export function Mods() {
	const { data: groupedCategories } = useGroupedCategories()
	const { classesOpen, classesExpanded, classesRef, isGuideCompleted, functions } = useMods()

	const { handleClassesOpen, handleClassesExpand } = functions

	return (
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
							<button type="button" className={styles.classesExpand} onClick={handleClassesExpand}>
								Посмотреть все
							</button>
						</div>
					</div>
					<div className={styles.divider}></div>
					<div className={styles.search}>{/* <SearchMods /> */}</div>
				</nav>
			) : (
				<div className="w-full">
					<Skeleton className="h-[56px]" />
				</div>
			)}
		</div>
	)
}
