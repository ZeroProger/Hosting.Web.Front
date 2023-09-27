import { useStore } from 'effector-react'
import { useRouter, useSearchParams } from 'next/navigation'
import numeral from 'numeral'
import { useEffect, useState } from 'react'

import { ServerUrls } from '@/shared/routes/urls'
import { $serverHash } from '@/shared/store'
import { IFileNode } from '@/shared/types'

import { useFetchServerFiles } from '../../queries'

export function useServerFiles() {
	const router = useRouter()
	const searchParams = useSearchParams()
	const path = searchParams.get('path') || ''
	const serverHash = useStore($serverHash)

	const { data: fileNodes } = useFetchServerFiles()

	const [pathParts, setPathParts] = useState<string[]>([])
	const [fileNodesByPath, setFileNodesByPath] = useState<IFileNode[] | null>(null)

	useEffect(() => {
		const parts = path.split('/').filter((p) => p.length > 0)

		setPathParts(parts)

		if (fileNodes) {
			const filteredFileNodes = filterFilesNodesByPath(path)

			setFileNodesByPath(filteredFileNodes)
		}
	}, [path])

	useEffect(() => {
		if (!fileNodesByPath && fileNodes) {
			const filteredFileNodes = filterFilesNodesByPath(path)

			setFileNodesByPath(filteredFileNodes)
		}
	}, [fileNodes, fileNodesByPath])

	const filterFilesNodesByPath = (path: string) => {
		if (!fileNodes) {
			return []
		}

		if (path === '') {
			return fileNodes.filter((node) => node.path.split('/').length === 1)
		} else {
			const filterPath = path + '/'
			
			return fileNodes.filter((node) => {
				return (
					node.path === filterPath ||
					(node.path.startsWith(filterPath) &&
						(node.path === filterPath ||
							node.path.split('/').length === filterPath.split('/').length))
				)
			})
		}
	}

	const createPathUrl = (pathPartName: string): string => {
		const pathPartIndex = pathParts.indexOf(pathPartName) + 1

		return `${pathParts.slice(0, pathPartIndex).join('/')}`
	}

	const handleGoHomeClick = () => {
		router.push(ServerUrls.server.files(serverHash!))
	}

	const handleUploadFileClick = () => {}

	const handleCreateFolderClick = () => {}

	const handleCreateFileClick = () => {}

	const handleRemoveItemClick = () => {}

	const handleDownloadItemClick = () => {}

	const formatBytes = (bytes: number): string => {
		const data = numeral(bytes)

		return data.format('0 ib').replace('GiB', 'GB').replace('MiB', 'MB').replace('KiB', 'KB')
	}

	return {
		serverHash,
		path,
		fileNodesByPath,
		pathParts,
		functions: {
			createPathUrl,
			formatBytes,
			handleGoHomeClick,
			handleUploadFileClick,
			handleCreateFolderClick,
			handleCreateFileClick,
			handleRemoveItemClick,
			handleDownloadItemClick,
		},
	}
}
