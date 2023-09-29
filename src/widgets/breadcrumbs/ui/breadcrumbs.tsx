'use client'

import { useStore } from 'effector-react'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'

import { useFetchServer } from '@/shared/queries/server'
import { ModUrls, ServerUrls } from '@/shared/routes/urls'
import { $serverHash } from '@/shared/store'
import { Button } from '@/shared/ui/button'

import { ModTabs, ServerTabs } from '../config'
import { useBreadcrumbs } from '../hooks'

import styles from './styles.module.scss'
import { useFetchMod } from '@/layouts/mod-layout/queries'

export function BreadcrumbItem({
	href,
	content,
	isLast = false,
}: {
	href: string
	content: string
	isLast?: boolean
}) {
	return (
		<li className={styles.breadcrumb}>
			{isLast ? (
				<span>{content}</span>
			) : (
				<Button
					variant="ghost"
					className="h-auto py-0 border-2 border-transparent transition-colors duration-200 hover:bg-transparent hover:border-input"
					asChild
				>
					<Link href={href}>{content}</Link>
				</Button>
			)}
		</li>
	)
}

export function Breadcrumbs() {
	const pathname = usePathname()
	const params = useParams()
	const serverHash = useStore($serverHash)

	const { pathParts, functions } = useBreadcrumbs()
	const { isModPathPart, isVersionPathPart } = functions

	const { data: server } = useFetchServer(serverHash)
	const { data: mod } = useFetchMod(+params.modId)

	if (!server) return null

	return (
		<ul className={styles.breadcrumbs}>
			<BreadcrumbItem href={ServerUrls.servers()} content={'Сервера'} />
			<BreadcrumbItem
				href={ServerUrls.server.overview(serverHash!)}
				content={server.gameServerName!}
			/>
			{pathParts.map((value, index, arr) => {
				if (index > 0 && arr[index - 1] === 'mods') {
					if (value === 'search')
						return (
							<BreadcrumbItem
								key={value}
								content={ModTabs.get(value)!}
								href={ModUrls.search(serverHash!)}
								isLast={index === arr.length - 1}
							/>
						)
					return (
						<BreadcrumbItem
							key={value}
							href={ModUrls.mod(serverHash!, mod?.id!)}
							content={mod?.name!}
							isLast={index === arr.length - 1}
						/>
					)
				}
				if (index > 0 && arr[index - 1] === 'players')
					return (
						<BreadcrumbItem
							content={ServerTabs.get(value)!}
							href={ServerUrls.server.players(serverHash!, value)}
							isLast={index === arr.length - 1}
						/>
					)
				if (value === 'files') {
					if (arr[0] === 'mods')
						return (
							<BreadcrumbItem
								key={'mod_' + value}
								href={ModUrls.files(serverHash!, mod?.id!)}
								content={ModTabs.get(value)!}
								isLast={index === arr.length - 1}
							/>
						)
					return (
						<BreadcrumbItem
							key={'server_' + value}
							href={ServerUrls.server.files(serverHash!)}
							content={ServerTabs.get(value)!}
							isLast={index === arr.length - 1}
						/>
					)
				}
				if (!isModPathPart(value) && !isVersionPathPart(value))
					return (
						<BreadcrumbItem
							key={value}
							href={ServerUrls.server[value](serverHash!)}
							content={ServerTabs.get(value)!}
							isLast={index === arr.length - 1}
						/>
					)
				if (isModPathPart(value))
					return (
						<BreadcrumbItem
							key={value}
							href={ModUrls[value](serverHash!, mod?.id!)}
							content={ModTabs.get(value)!}
							isLast={index === arr.length - 1}
						/>
					)
			})}
		</ul>
	)
}
