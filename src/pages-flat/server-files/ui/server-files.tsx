'use client'

import 'highlight.js/styles/atom-one-dark.min.css'
import { Home, Info } from 'lucide-react'

import { FileCreate } from '@/features/file-create'
import { FolderCreate } from '@/features/folder-create'

import { cn } from '@/shared/lib/utils'
import { Button } from '@/shared/ui/button'
import { Heading } from '@/shared/ui/heading'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/shared/ui/tooltip'

import { useServerFiles } from '../hooks'

import { FileNodesList } from './file-nodes-list'
import { FilesBreadcrumbs } from './files-breadcrumbs'
import styles from './styles.module.scss'

export function ServerFiles() {
	const { path, fileContent, fileContentRef, fileNodesByPath, functions } = useServerFiles()

	const { handleGoHome } = functions

	return (
		<div className={styles.container}>
			<div className="flex items-center gap-4 justify-between flex-nowrap">
				<Heading className="lg:text-2xl">Файловый менеджер</Heading>
				<TooltipProvider>
					<Tooltip delayDuration={200}>
						<TooltipTrigger>
							<Info size={24} />
						</TooltipTrigger>
						<TooltipContent align="end" sideOffset={8}>
							<p className="text-md max-w-[350px] text-center">
								Для загрузки файлов/папок перетащите их в область файлового менеджера
							</p>
						</TooltipContent>
					</Tooltip>
				</TooltipProvider>
			</div>
			<div className={styles.header}>
				<div className={styles.home}>
					<Button onClick={handleGoHome}>
						<Home size={24} />
					</Button>
					<span className={styles.rootPath} />
				</div>
				<FilesBreadcrumbs path={path} />
				<div className={styles.headerActions}>
					{(!fileContent || fileNodesByPath) && (
						<>
							<FileCreate />
							<FolderCreate />
						</>
					)}
				</div>
			</div>
			<pre className={cn({ [styles.hide]: !(fileContent && !fileNodesByPath) })}>
				<code ref={fileContentRef} className="text-lg">
					{fileContent}
				</code>
			</pre>
			{fileNodesByPath && <FileNodesList fileNodes={fileNodesByPath} />}
		</div>
	)
}
