import { FolderUp } from 'lucide-react'

import { Button } from '@/shared/ui/button'
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/shared/ui/dialog'
import { Input } from '@/shared/ui/input'

import styles from './styles.module.scss'

export function FolderUpload() {
	const handleUploadFolder = () => {}

	return (
		<Dialog>
			<DialogTrigger>
				<Button variant="ghost" size="icon">
					<FolderUp size={24} />
				</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogTitle>Загрузка папки</DialogTitle>
				<div className={styles.container}>
					<div className={styles.pickDirectory}>
						<div className={styles.pickResultText}>
							<span>Папка будет загружена в директорию:</span>
							<span className="font-semibold">~/world/data</span>
						</div>
					</div>
					<Input type="file" />
					<Button
						variant="primary"
						className="self-end h-auto py-1 text-lg"
						onClick={handleUploadFolder}
					>
						Загрузить
					</Button>
				</div>
			</DialogContent>
		</Dialog>
	)
}
