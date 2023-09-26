'use client'

import { useStore } from 'effector-react'
import { useRouter } from 'next/navigation'

import { CForgeSoftwareType, modLoaders } from '@/shared/config/curse-forge'
import { useSearchParams } from '@/shared/hooks'
import { ModUrls } from '@/shared/routes/urls'
import { $serverHash } from '@/shared/store'
import { SubHeading } from '@/shared/ui/heading'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/shared/ui/select'

import styles from './styles.module.scss'

export function ModSoftwareFilter() {
	const router = useRouter()
	const searchParams = useSearchParams()
	const serverHash = useStore($serverHash)

	const modloaderAnyValue = String(CForgeSoftwareType.Any)

	const modLoaderType = searchParams.modLoaderType! || modloaderAnyValue

	const handleSelect = (value: string) => {
		router.push(
			ModUrls.search(serverHash!, {
				...searchParams,
				modLoaderType: value !== modloaderAnyValue ? value : null!,
			}),
			{
				scroll: false,
			}
		)
	}

	return (
		<div className={styles.filterBlock}>
			<SubHeading className="text-xl pb-4 mb-5 border-b-2 border-border">Ядро</SubHeading>
			<Select
				value={modLoaderType || undefined}
				defaultValue={modLoaderType || undefined}
				onValueChange={handleSelect}
			>
				<SelectTrigger className="text-lg">
					<SelectValue>
						{modLoaderType
							? modLoaders.find((opt) => opt.value === modLoaderType)?.label!
							: undefined}
					</SelectValue>
				</SelectTrigger>
				<SelectContent sideOffset={6} className="max-h-[300px]">
					{modLoaders?.map((modloader) => (
						<SelectItem
							key={modloader.label}
							className="text-lg py-1 cursor-pointer"
							value={String(modloader.value)}
						>
							{modloader.label}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</div>
	)
}
