'use client'

import { useStore } from 'effector-react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

import { ServerUrls } from '@/shared/routes/urls'
import { $serverHash } from '@/shared/store'
import { Button } from '@/shared/ui/button'
import { ScrollArea, ScrollBar } from '@/shared/ui/scroll-area'

import styles from './styles.module.scss'

export function FilesBreadcrumbs({ path }: { path: string }) {
	const router = useRouter()
	const serverHash = useStore($serverHash)
	const [pathParts, setPathParts] = useState<string[]>([])

	useEffect(() => {
		const parts = path.split('/').filter((p) => p.length > 0)

		setPathParts(parts)
	}, [path])

	const createPathUrl = (pathPartName: string): string => {
		const pathPartIndex = pathParts.indexOf(pathPartName) + 1

		return `${pathParts.slice(0, pathPartIndex).join('/')}`
	}

	if (pathParts.length === 0) return null

	return (
		<ScrollArea>
			<div className={styles.pathParts}>
				{pathParts.map((pathPart, idx) => (
					<>
						<Button
							variant="ghost"
							key={pathPart}
							className="h-auto py-0 flex flex-row gap-2 items-center text-lg w-max"
							disabled={idx === pathParts.length - 1}
							onClick={() =>
								router.push(ServerUrls.server.files(serverHash!, createPathUrl(pathPart)), {
									scroll: false,
								})
							}
						>
							{pathPart}
						</Button>
						{idx < pathParts.length - 1 && <span className={styles.slash} />}
					</>
				))}
			</div>
			<ScrollBar orientation="horizontal" className="hover:cursor-grab active:cursor-grabbing" />
		</ScrollArea>
	)
}
