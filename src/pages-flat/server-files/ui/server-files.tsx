'use client'

import { FilePlus, FileUp, FolderPlus, FolderUp, Home } from 'lucide-react'
import { useRouter } from 'next/navigation'

import { ServerUrls } from '@/shared/routes/urls'
import { Button } from '@/shared/ui/button'
import { Heading } from '@/shared/ui/heading'

import { useServerFiles } from '../hooks'

import { FileNodesList } from './file-nodes-list'
import styles from './styles.module.scss'

export function ServerFiles() {
	const router = useRouter()

	const { serverHash, fileContent, fileNodesByPath, pathParts, functions } = useServerFiles()

	const {
		createPathUrl,
		formatBytes,
		handleGoHome,
		handleCreateFile,
		handleCreateFolder,
		handleUploadFile,
		handleUploadFolder,
	} = functions

	return (
		<div className={styles.container}>
			<Heading>Файлы сервера</Heading>
			<div className={styles.header}>
				<div className={styles.home}>
					<Button onClick={handleGoHome}>
						<Home size={24} />
					</Button>
					<span className={styles.rootPath} />
				</div>
				{pathParts.length > 0 && (
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
				)}
				<div className={styles.headerActions}>
					<Button variant="ghost" size="icon" onClick={handleUploadFile}>
						<FileUp size={24} />
					</Button>
					<Button variant="ghost" size="icon" onClick={handleUploadFolder}>
						<FolderUp size={24} />
					</Button>
					<Button variant="ghost" size="icon" onClick={handleCreateFolder}>
						<FolderPlus size={24} />
					</Button>
					<Button variant="ghost" size="icon" onClick={handleCreateFile}>
						<FilePlus size={24} />
					</Button>
				</div>
			</div>
			{fileContent && <div>Контент: {fileContent}</div>}
			{fileNodesByPath && !fileContent && <FileNodesList fileNodes={fileNodesByPath} />}
		</div>
	)
}
