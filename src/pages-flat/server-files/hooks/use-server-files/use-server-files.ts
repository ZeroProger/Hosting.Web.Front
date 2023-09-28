import { useStore } from 'effector-react'
import { useRouter, useSearchParams } from 'next/navigation'
import numeral from 'numeral'
import { useEffect, useState } from 'react'

import { ServerUrls } from '@/shared/routes/urls'
import { $serverHash } from '@/shared/store'
import { IFileNode } from '@/shared/types'

import { useFetchServerFileContent, useFetchServerFiles } from '../../queries'

export function useServerFiles() {
	const router = useRouter()
	const searchParams = useSearchParams()
	const path = searchParams.get('path') || ''
	const serverHash = useStore($serverHash)

	const [fileNodesByPath, setFileNodesByPath] = useState<IFileNode[] | null>(null)
	const [activeFilePath, setActiveFilePath] = useState<string | null>()

	const { data: fileNodes } = useFetchServerFiles()
	const { data: fileContent } = useFetchServerFileContent(path, { enabled: !!activeFilePath })

	useEffect(() => {
		if (fileNodes) {
			const fileNode = fileNodes.find((f) => f.path === path)

			if (fileNode && fileNode.type === 'file') {
				setActiveFilePath(fileNode.path)
				setFileNodesByPath(null)
			} else {
				setActiveFilePath(null)

				const filteredFileNodes = filterFilesNodesByPath(path)

				setFileNodesByPath(filteredFileNodes)
			}
		}
	}, [path, fileNodes, fileContent])

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

	const handleGoHome = () => {
		router.push(ServerUrls.server.files(serverHash!))
	}

	const formatBytes = (bytes: number): string => {
		const data = numeral(bytes)

		return data.format('0 ib').replace('GiB', 'GB').replace('MiB', 'MB').replace('KiB', 'KB')
	}

	return {
		serverHash,
		path,
		fileContent,
		fileNodesByPath,
		functions: {
			formatBytes,
			handleGoHome,
		},
	}
}
