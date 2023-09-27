'use client'

import { FilePlus, FolderPlus, Home, Upload } from 'lucide-react'
import Link from 'next/link'

import { ServerUrls } from '@/shared/routes/urls'
import { Button } from '@/shared/ui/button'
import { Heading } from '@/shared/ui/heading'

import { useServerFiles } from '../hooks'

import { FileNodesList } from './file-nodes-list'
import styles from './styles.module.scss'

export function ServerFiles() {
	const { serverHash, fileNodesByPath, pathParts, functions } = useServerFiles()

	const {
		createPathUrl,
		formatBytes,
		handleGoHomeClick,
		handleCreateFileClick,
		handleCreateFolderClick,
		handleDownloadItemClick,
		handleRemoveItemClick,
		handleUploadFileClick,
	} = functions

	return (
		<div className={styles.container}>
			<Heading>Файлы сервера</Heading>
			<div className={styles.header}>
				<div className={styles.home}>
					<Button className={styles.headerBaseBtn} onClick={handleGoHomeClick}>
						<Home size={24} />
					</Button>
				</div>
				{pathParts.length > 0 && (
					<div className={styles.pathParts}>
						{pathParts.map((pathPart, idx) => (
							<Button
								asChild
								variant="default"
								key={pathPart}
								className="flex flex-row gap-2 items-center text-lg w-max"
							>
								<Link
									href={ServerUrls.server.files(serverHash!, createPathUrl(pathPart))}
									scroll={false}
								>
									{pathPart}
								</Link>
							</Button>
						))}
					</div>
				)}
				<div className={styles.headerActions}>
					<div className={styles.uploadFile}>
						<Button variant="default" size="icon" onClick={handleUploadFileClick}>
							<Upload size={24} />
						</Button>
					</div>
					<div className={styles.createFolder}>
						<Button variant="default" size="icon" onClick={handleCreateFolderClick}>
							<FolderPlus size={24} />
						</Button>
					</div>
					<div className={styles.createFile}>
						<Button variant="default" size="icon" onClick={handleCreateFileClick}>
							<FilePlus size={24} />
						</Button>
					</div>
				</div>
			</div>
			{fileNodesByPath && <FileNodesList fileNodes={fileNodesByPath} />}
		</div>
	)
}
