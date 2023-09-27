import { useStore } from 'effector-react'
import { File, Folder } from 'lucide-react'
import Link from 'next/link'

import { ServerUrls } from '@/shared/routes/urls'
import { $serverHash } from '@/shared/store'
import { IFileNode } from '@/shared/types'
import { SkeletonList } from '@/shared/ui/skeleton'

import { useServerFiles } from '../hooks'

import styles from './styles.module.scss'

export function FileNodesList({ fileNodes }: { fileNodes?: IFileNode[] }) {
	const serverHash = useStore($serverHash)

	const { functions } = useServerFiles()
	const { formatBytes } = functions

	if (!fileNodes) {
		return (
			<div className={styles.list}>
				<SkeletonList count={12} height={50} />
			</div>
		)
	}

	if (fileNodes.length === 0) {
		return <div className={styles.notFound}>Файлы не найдены</div>
	}

	return (
		<div className={styles.list}>
			{fileNodes.map((listItem) => (
				<div key={listItem.path} className={styles.listItem}>
					{listItem.type === 'file' ? <File size={20} /> : <Folder size={20} />}
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
				</div>
			))}
		</div>
	)
}
