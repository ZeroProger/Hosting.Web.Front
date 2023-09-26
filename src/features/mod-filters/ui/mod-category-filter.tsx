'use client'

import { clsx } from 'clsx'
import { useStore } from 'effector-react'
import Link from 'next/link'

import { useSearchParams } from '@/shared/hooks'
import { useCategories } from '@/shared/queries/mod'
import { ModUrls } from '@/shared/routes/urls'
import { $serverHash } from '@/shared/store'
import { SubHeading } from '@/shared/ui/heading'

import styles from './styles.module.scss'

export function ModCategoryFilter() {
	const searchParams = useSearchParams()
	const serverHash = useStore($serverHash)

	const { data: categories } = useCategories()

	if (!searchParams.classId) return null

	return (
		<div className={styles.filterBlock}>
			<SubHeading className="text-xl pb-4 mb-5 border-b-2 border-border">Категория</SubHeading>
			<div className={clsx(styles.filterOptions, styles.filterOptionsCategories)}>
				{categories?.map(({ id: categoryId, classId, name }) => (
					<Link
						key={categoryId}
						href={ModUrls.search(serverHash!, { ...searchParams, categoryId, classId })}
						className={clsx(styles.filterLink, {
							[styles.filterLinkActive]: categoryId === parseInt(searchParams.categoryId!),
						})}
						scroll={false}
					>
						{name}
					</Link>
				))}
			</div>
		</div>
	)
}
