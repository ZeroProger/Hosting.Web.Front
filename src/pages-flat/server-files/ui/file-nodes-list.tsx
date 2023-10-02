import { useStore } from 'effector-react'
import { FileText, Folder, MoreHorizontal } from 'lucide-react'
import Link from 'next/link'

import { FileNodeDownload } from '@/features/file-node-download'
import { FileNodeRemove } from '@/features/file-node-remove'

import { ServerUrls } from '@/shared/routes/urls'
import { $serverHash } from '@/shared/store'
import { IFileNode } from '@/shared/types'
import { Button } from '@/shared/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/shared/ui/popover'
import { SkeletonList } from '@/shared/ui/skeleton'

import { useServerFiles } from '../hooks'

import { Dropzone } from './dropzone'
import styles from './styles.module.scss'

export function FileNodesList({ fileNodes }: { fileNodes?: IFileNode[] }) {
	const serverHash = useStore($serverHash)

	const { functions, path } = useServerFiles()
	const { formatBytes } = functions

	if (!fileNodes) {
		return (
			<div className={styles.list}>
				<SkeletonList count={12} height={50} />
			</div>
		)
	}

	if (fileNodes.length === 0) {
		return (
			<Dropzone uploadPath={path}>
				<div className={styles.notFound}>
					<p className={styles.text}>Папка пустая</p>
				</div>
			</Dropzone>
		)
	}

	return (
		<Dropzone uploadPath={path}>
			<div className={styles.list}>
				{fileNodes.map((fileNode) => (
					<div key={fileNode.path} className={styles.listItem}>
						{fileNode.type === 'file' ? <FileText size={24} /> : <Folder size={24} />}
						<Link
							href={ServerUrls.server.files(serverHash!, fileNode.path)}
							className={styles.listItemName}
							scroll={false}
						>
							{fileNode.name}
						</Link>
						{fileNode.type === 'file' && (
							<div className={styles.listItemSize}>{formatBytes(fileNode.size)}</div>
						)}
						<Popover>
							<PopoverTrigger asChild>
								<Button variant="ghost" size="icon" className="py-1 px-2">
									<MoreHorizontal size={24} strokeWidth={2.5} />
								</Button>
							</PopoverTrigger>
							<PopoverContent
								align="end"
								alignOffset={-16}
								className="p-2 flex flex-col gap-1 w-auto"
							>
								<FileNodeDownload path={fileNode.path} />
								<FileNodeRemove path={fileNode.path} />
							</PopoverContent>
						</Popover>
					</div>
				))}
			</div>
		</Dropzone>
	)
}
