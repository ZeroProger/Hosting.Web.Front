'use client';

import { useStore } from 'effector-react';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';



import { useFetchServer } from '../queries/server';
import { ModUrls, ServerUrls } from '../routes/urls';
import { $serverHash } from '../store';



import { useFetchMod } from '@/layouts/mod-layout/queries';


export const ServerTabs = new Map([
	['overview', 'Основная информация'],
	['players', 'Игроки'],
	['white-list', 'Белый список'],
	['operators', 'Операторы'],
	['banned-players', 'Заблокированные игроки'],
	['banned-ips', 'Заблокированные IP-адреса'],
	['console', 'Консоль'],
	['files', 'Файлы'],
	['backups', 'Резервные копии'],
	['settings', 'Настройки'],
	['software', 'Ядро'],
])

export const ModTabs = new Map([
	['mods', 'Моды'],
	['search', 'Поиск'],
	['files', 'Файлы'],
	['images', 'Изображения'],
])

function isVersionUrl(value: keyof typeof ServerUrls.server): value is 'version' | 'versions' {
	const method = ServerUrls.server[value]
	return method.name === 'version' || method.name === 'versions'
}

export function BreadcrumbsItem({
	href,
	content,
	isLast = false,
}: {
	href: string
	content: string
	isLast?: boolean
}) {
	return (
		<li className="flex gap-1 items-center">
			{isLast ? <h1>{content}</h1> : <Link href={href}>{content} / </Link>}
		</li>
	)
}

export function Breadcrumbs() {
	const pathname = usePathname()
	const params = useParams()
	const serverHash = useStore($serverHash)
	const [modId, setModId] = useState<number>()
	const { data: server } = useFetchServer(serverHash)
	const { data: mod } = useFetchMod(modId)

	useEffect(() => {
		if (params.modId !== undefined) setModId(+params.modId)
	}, [pathname])

	function isModUrl(
		property: keyof typeof ServerUrls.server | keyof typeof ModUrls
	): property is keyof typeof ModUrls {
		return Object.hasOwn(ModUrls, property)
	}

	return (
		<ol className="flex gap-1 mb-3 ml-6">
			<BreadcrumbsItem href={ServerUrls.servers()} content={'Сервера'} />
			<BreadcrumbsItem
				href={ServerUrls.server.overview(serverHash!)}
				content={server?.gameServerName!}
			/>
			{(
				pathname.split('/').slice(3) as (keyof typeof ServerUrls.server | keyof typeof ModUrls)[]
			).map((value, index, arr) => {
				if (index > 0 && arr[index - 1] === 'mods') {
					if (value === 'search')
						return (
							<BreadcrumbsItem
								key={value}
								content={ModTabs.get(value)!}
								href={ModUrls.search(serverHash!)}
								isLast={index === arr.length - 1}
							/>
						)
					return (
						<BreadcrumbsItem
							key={value}
							href={ModUrls.mod(serverHash!, modId!)}
							content={mod?.name!}
							isLast={index === arr.length - 1}
						/>
					)
				}
				if (index > 0 && arr[index - 1] === 'players')
					return (
						<BreadcrumbsItem
							content={ServerTabs.get(value)!}
							href={ServerUrls.server.players(serverHash!, value)}
							isLast={index === arr.length - 1}
						/>
					)
				if (value === 'files') {
					if (arr[0] === 'mods')
						return (
							<BreadcrumbsItem
								key={'mod_' + value}
								href={ModUrls.files(serverHash!, modId!)}
								content={ModTabs.get(value)!}
								isLast={index === arr.length - 1}
							/>
						)
					return (
						<BreadcrumbsItem
							key={'server_' + value}
							href={ServerUrls.server.files(serverHash!)}
							content={ServerTabs.get(value)!}
							isLast={index === arr.length - 1}
						/>
					)
				}
				if (!isModUrl(value) && !isVersionUrl(value))
					return (
						<BreadcrumbsItem
							key={value}
							href={ServerUrls.server[value](serverHash!)}
							content={ServerTabs.get(value)!}
							isLast={index === arr.length - 1}
						/>
					)
				if (isModUrl(value))
					return (
						<BreadcrumbsItem
							key={value}
							href={ModUrls[value](serverHash!, modId!)}
							content={ModTabs.get(value)!}
							isLast={index === arr.length - 1}
						/>
					)
			})}
		</ol>
	)
}