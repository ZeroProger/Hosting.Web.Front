'use client'

import { useStore } from 'effector-react'
import { useRouter } from 'next/navigation'

import { CForgeModSortBy, sortOptions } from '@/shared/config/curse-forge'
import { useSearchParams } from '@/shared/hooks'
import { ModUrls } from '@/shared/routes/urls'
import { $serverHash } from '@/shared/store'
import { SubHeading } from '@/shared/ui/heading'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/shared/ui/select'

import styles from './styles.module.scss'

export function ModSorting() {
	const router = useRouter()
	const searchParams = useSearchParams()
	const serverHash = useStore($serverHash)

	const sortField = searchParams.sortField!

	if (!searchParams.sortField) return null

	const handleSelect = (value: string) => {
		router.push(
			ModUrls.search(serverHash!, {
				...searchParams,
				sortField: parseInt(value),
			}),
			{
				scroll: false,
			}
		)
	}

	return (
		<div className={styles.sorting}>
			<div className={styles.sort}>
				<SubHeading className="text-xl mb-0 whitespace-nowrap">Сортировать по</SubHeading>
				<div className={styles.sortFields}>
					<Select
						value={sortField || undefined}
						defaultValue={String(CForgeModSortBy.Matching)}
						onValueChange={handleSelect}
					>
						<SelectTrigger className="text-lg">
							<SelectValue>
								{sortField ? sortOptions.find((opt) => opt.value === sortField)?.label! : undefined}
							</SelectValue>
						</SelectTrigger>
						<SelectContent sideOffset={6}>
							{sortOptions.map((sortOption) => (
								<SelectItem
									key={sortOption.label}
									value={String(sortOption.value)}
									className="text-lg py-1 cursor-pointer"
								>
									{sortOption.label}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</div>
				{/* Pagination */}
			</div>
		</div>
	)
}
