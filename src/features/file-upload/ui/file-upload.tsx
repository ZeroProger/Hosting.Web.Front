import { FileUp } from 'lucide-react'

import { Button } from '@/shared/ui/button'
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/shared/ui/dialog'
import { Input } from '@/shared/ui/input'

import styles from './styles.module.scss'

export function FileUpload() {
	const handleUploadFile = () => {}

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="ghost" size="icon">
					<FileUp size={24} />
				</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogTitle>Загрузка файла</DialogTitle>
				<div className={styles.container}>
					<div className={styles.pickDirectory}>
						<div className={styles.pickResultText}>
							<span>Файл будет загружен в директорию:</span>
							<span className="font-semibold">~/world/data</span>
						</div>
					</div>
					<Input type="file" />
					<Button
						variant="primary"
						className="self-end h-auto py-1 text-lg"
						onClick={handleUploadFile}
					>
						Загрузить
					</Button>
				</div>
			</DialogContent>
		</Dialog>
	)
}
