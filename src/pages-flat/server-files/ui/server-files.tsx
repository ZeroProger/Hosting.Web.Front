'use client'

import { Home } from 'lucide-react'

import { FileCreate } from '@/features/file-create'
import { FileUpload } from '@/features/file-upload'
import { FolderCreate } from '@/features/folder-create'
import { FolderUpload } from '@/features/folder-upload'

import { Button } from '@/shared/ui/button'
import { Heading } from '@/shared/ui/heading'

import { useServerFiles } from '../hooks'

import { FileNodesList } from './file-nodes-list'
import { FilesBreadcrumbs } from './files-breadcrumbs'
import styles from './styles.module.scss'

export function ServerFiles() {
	const { path, fileContent, fileNodesByPath, functions } = useServerFiles()

	const { handleGoHome } = functions

	return (
		<div className={styles.container}>
			<Heading>Файловый менеджер</Heading>
			<div className={styles.header}>
				<div className={styles.home}>
					<Button onClick={handleGoHome}>
						<Home size={24} />
					</Button>
					<span className={styles.rootPath} />
				</div>
				<FilesBreadcrumbs path={path} />
				<div className={styles.headerActions}>
					<FileUpload />
					<FolderUpload />
					<FileCreate />
					<FolderCreate />
				</div>
			</div>
			{fileContent && !fileNodesByPath && <div>Контент: {fileContent}</div>}
			{fileNodesByPath && <FileNodesList fileNodes={fileNodesByPath} />}
		</div>
	)
}
