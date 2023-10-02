'use client'

import { useStore } from 'effector-react'
import { useRouter } from 'next/navigation'

import { useSearchParams } from '@/shared/hooks'
import { useGameVersions } from '@/shared/queries/mod'
import { ModUrls } from '@/shared/routes/urls'
import { $serverHash } from '@/shared/store'
import { SubHeading } from '@/shared/ui/heading'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/shared/ui/select'

import styles from './styles.module.scss'

export function ModVersionFilter() {
	const router = useRouter()
	const searchParams = useSearchParams()
	const serverHash = useStore($serverHash)
	const gameVersion = searchParams.gameVersion!

	const anyGameVersionValue = 'ANY_VERSION'
	const anyGameVersionLabel = 'Любая'

	const { data: versions } = useGameVersions()

	if (versions?.length === 0) return null

	const handleSelect = (value: string) => {
		router.push(
			ModUrls.search(serverHash!, {
				...searchParams,
				gameVersion: value === anyGameVersionValue ? null! : value,
			}),
			{
				scroll: false,
			}
		)
	}

	return (
		<div className={styles.filterBlock}>
			<SubHeading className="text-xl pb-4 mb-5 border-b-2 border-border">Версия</SubHeading>
			<Select
				value={gameVersion || undefined}
				defaultValue={gameVersion || undefined}
				onValueChange={handleSelect}
			>
				<SelectTrigger className="text-lg">
					<SelectValue>{gameVersion ? gameVersion : anyGameVersionLabel}</SelectValue>
				</SelectTrigger>
				<SelectContent sideOffset={6} className="max-h-[300px]">
					<SelectItem className="text-lg py-1 cursor-pointer" value={anyGameVersionValue}>
						{anyGameVersionLabel}
					</SelectItem>
					{versions?.map((version) => (
						<SelectItem
							key={version.version}
							className="text-lg py-1 cursor-pointer"
							value={version.version}
						>
							{version.version}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
			{/* <div className={styles.filterOptions}>
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
	</div> */}
		</div>
	)
}
