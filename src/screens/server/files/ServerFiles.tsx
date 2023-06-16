import { filesTree } from 'fakeData/server.data'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'

import { Icon } from '@/components/ui/Icon'
import Heading from '@/components/ui/heading/Heading'

import { IFileNode } from '@/shared/types/server.types'

import Meta from '@/utils/meta/Meta'
import { deepSearch } from '@/utils/objects/deepSearch'
import { formatMemoryBytes } from '@/utils/tariffs/tariffs'

import { getServerFilesUrl } from '@/config/url.config'

import styles from './ServerFiles.module.scss'

interface IServerFiles {
	nestedList?: IFileNode[]
}

const ServerFiles: FC<IServerFiles> = ({ nestedList }) => {
	const router = useRouter()
	const slug = String(router.query.slug!)
	const [currentNode, setCurrentNode] = useState<IFileNode | null>(null)
	const [pathParts, setPathParts] = useState<string[]>([])

	useEffect(() => {
		const parts = router.asPath.split('/').splice(4)

		setPathParts(parts)
	}, [router.asPath])

	useEffect(() => {
		const node = getCurrentNode()

		setCurrentNode(node)
	}, [pathParts])

	const handleUploadFileClick = () => {}

	const handleCreateFolderClick = () => {}

	const handleCreateFileClick = () => {}

	const handleGoHomeClick = () => {
		router.push(getServerFilesUrl(String(router.query.slug)))
	}

	const handleRemoveItemClick = () => {}

	const handleDownloadItemClick = () => {}

	const createPathUrl = (index: number): string => {
		return `/${pathParts.slice(0, index + 1).join('/')}`
	}

	const allowDownload = (listItem: IFileNode): boolean => {
		return (
			listItem.extension !== '.json' &&
			listItem.extension !== '.properties' &&
			listItem.name !== 'mods'
		)
	}

	const getCurrentNode = () => {
		const part = pathParts.at(-1)

		return deepSearch(filesTree, 'name', (k, v) => v === part)
	}

	return (
		<Meta title="Файлы сервера">
			<div className={styles.container}>
				<Heading title="Файлы сервера" />
				<div className={styles.header}>
					<div className={styles.home}>
						<button type="button" className={styles.headerBaseBtn} onClick={handleGoHomeClick}>
							<Icon name="HiHome" size={24} />
						</button>
					</div>
					{pathParts.length > 0 && (
						<div className={styles.pathParts}>
							{pathParts.map((pathPart, idx) => (
								<Link
									href={getServerFilesUrl(slug, createPathUrl(idx))}
									key={pathPart}
									className={styles.headerBaseBtn}
								>
									<Icon
										name={
											deepSearch(filesTree, 'name', (k, v) => v === pathPart)?.type === 'file'
												? 'FaFileAlt'
												: 'FaFolder'
										}
										size={20}
									/>
									{pathPart}
								</Link>
							))}
						</div>
					)}
					{((nestedList && nestedList.length > 0) || (filesTree.length > 0 && !nestedList)) && (
						<div className={styles.filesCount}>
							<Icon name="FaFolderOpen" size={20} />
							{nestedList ? nestedList.length : filesTree.length}
						</div>
					)}
					<div className={styles.headerActions}>
						<div className={styles.uploadFile}>
							<button
								type="button"
								className={styles.headerActionBtn}
								onClick={handleUploadFileClick}
							>
								<Icon name="FaUpload" size={24} />
							</button>
						</div>
						<div className={styles.createFolder}>
							<button
								type="button"
								className={styles.headerActionBtn}
								onClick={handleCreateFolderClick}
							>
								<Icon name="FaFolderPlus" size={24} />
							</button>
						</div>
						<div className={styles.createFile}>
							<button
								type="button"
								className={styles.headerActionBtn}
								onClick={handleCreateFileClick}
							>
								<Icon name="FaFileMedical" size={24} />
							</button>
						</div>
					</div>
				</div>
				<div className={styles.list}>
					{(nestedList ? nestedList : filesTree).length === 0 && (
						<>
							{currentNode && currentNode?.type !== 'file' ? (
								<div className={styles.listEmpty}>
									<Icon name="Io5Warning" size={32} />
									Эта папка пуста
								</div>
							) : (
								currentNode && (
									<div className={styles.fileContent}>Контент файла {currentNode.name}</div>
								)
							)}
						</>
					)}
					{(nestedList ? nestedList : filesTree).map((listItem) => (
						<div key={listItem.path} className={styles.listItem}>
							<Icon name={listItem.type === 'directory' ? 'FaFolder' : 'FaFileAlt'} size={20} />
							<Link
								href={getServerFilesUrl(String(router.query.slug), listItem.path)}
								className={styles.listItemName}
							>
								{listItem.name}
							</Link>
							{listItem.type === 'file' && (
								<div className={styles.listItemSize}>{formatMemoryBytes(listItem.size)}</div>
							)}
							{allowDownload(listItem) && (
								<button
									type="button"
									className={styles.listItemDownloadBtn}
									onClick={handleDownloadItemClick}
								>
									<Icon name="FaDownload" size={20} />
								</button>
							)}
							{listItem.name !== 'server.properties' && (
								<button
									type="button"
									className={styles.listItemRemoveBtn}
									onClick={handleRemoveItemClick}
								>
									<Icon name="FaTrashAlt" size={20} />
								</button>
							)}
						</div>
					))}
				</div>
			</div>
		</Meta>
	)
}

export default ServerFiles
