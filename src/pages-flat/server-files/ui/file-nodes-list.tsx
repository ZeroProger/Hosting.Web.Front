import { useStore } from 'effector-react'
import { Download, FileText, Folder, MoreHorizontal, Trash2 } from 'lucide-react'
import Link from 'next/link'

import { ServerUrls } from '@/shared/routes/urls'
import { $serverHash } from '@/shared/store'
import { IFileNode } from '@/shared/types'
import { Button } from '@/shared/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/shared/ui/popover'
import { SkeletonList } from '@/shared/ui/skeleton'

import { useServerFiles } from '../hooks'

import styles from './styles.module.scss'

export function FileNodesList({ fileNodes }: { fileNodes?: IFileNode[] }) {
	const serverHash = useStore($serverHash)

	const { functions } = useServerFiles()
	const { formatBytes, handleDownloadNode, handleRemoveNode } = functions

	if (!fileNodes) {
		return (
			<div className={styles.list}>
				<SkeletonList count={12} height={50} />
			</div>
		)
	}

	if (fileNodes.length === 0) {
		return (
			<div className={styles.notFound}>
				<p className={styles.text}>Папка пустая</p>
			</div>
		)
	}

	return (
		<div className={styles.list}>
			{fileNodes.map((listItem) => (
				<div key={listItem.path} className={styles.listItem}>
					{listItem.type === 'file' ? <FileText size={24} /> : <Folder size={24} />}
					<Link
						href={ServerUrls.server.files(serverHash!, listItem.path)}
						className={styles.listItemName}
						scroll={false}
					>
						{listItem.name}
					</Link>
					{listItem.type === 'file' && (
						<div className={styles.listItemSize}>{formatBytes(listItem.size)}</div>
					)}
					<Popover>
						<PopoverTrigger>
							<Button variant="ghost" size="icon" className="py-1 px-2">
								<MoreHorizontal size={24} strokeWidth={2.5} />
							</Button>
						</PopoverTrigger>
						<PopoverContent className="p-2 flex flex-col gap-1 w-auto">
							<Button
								variant="ghost"
								className="h-auto text-foreground flex flex-nowrap items-center gap-2"
								onClick={handleDownloadNode}
							>
								<Download size={20} />
								Скачать
							</Button>
							<Button
								variant="ghost"
								className="h-auto text-foreground hover:bg-destructive hover:text-destructive-foreground flex flex-nowrap items-center gap-2"
								onClick={handleRemoveNode}
							>
								<Trash2 size={20} />
								Удалить
							</Button>
						</PopoverContent>
					</Popover>
				</div>
			))}
		</div>
	)
}
