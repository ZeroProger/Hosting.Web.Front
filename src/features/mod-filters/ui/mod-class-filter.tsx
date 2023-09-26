'use client'

import clsx from 'clsx'
import { useStore } from 'effector-react'
import Link from 'next/link'

import { useSearchParams } from '@/shared/hooks'
import { useGroupedCategories } from '@/shared/queries/mod'
import { ModUrls } from '@/shared/routes/urls'
import { $serverHash } from '@/shared/store'
import { SubHeading } from '@/shared/ui/heading'

import styles from './styles.module.scss'

export function ModClassFilter() {
	const searchParams = useSearchParams()
	const serverHash = useStore($serverHash)

	const { data: groupedCategories } = useGroupedCategories()

	return (
		<div className={styles.filterBlock}>
			<SubHeading className="text-xl pb-4 mb-5 border-b-2 border-border">Искать среди</SubHeading>
			<div className={styles.filterOptions}>
				<Link
					href={ModUrls.search(serverHash!, {
						...searchParams,
						classId: undefined,
						categoryId: undefined,
					})}
					className={clsx(styles.filterLink, {
						[styles.filterLinkActive]: !searchParams.classId,
					})}
					scroll={false}
				>
					All
				</Link>
				{groupedCategories?.map(({ classId, className }) => (
					<Link
						key={classId}
						href={ModUrls.search(serverHash!, { ...searchParams, classId, categoryId: undefined })}
						className={clsx(styles.filterLink, {
							[styles.filterLinkActive]: classId === parseInt(searchParams.classId!),
						})}
						scroll={false}
					>
						{className}
					</Link>
				))}
			</div>
		</div>
	)
}
