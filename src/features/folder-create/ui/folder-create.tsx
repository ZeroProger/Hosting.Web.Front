import { FolderPlus } from 'lucide-react'

import { Button } from '@/shared/ui/button'
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/shared/ui/dialog'
import { Input } from '@/shared/ui/input'

import styles from './styles.module.scss'

export function FolderCreate() {
	const handleCreateFolder = () => {}

	return (
		<Dialog>
			<DialogTrigger>
				<Button variant="ghost" size="icon">
					<FolderPlus size={24} />
				</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogTitle>Создание папки</DialogTitle>
				<div className={styles.container}>
					<div className={styles.pickDirectory}>
						<div className={styles.pickResultText}>
							<span>Папка будет создана внутри директории:</span>
							<span className="font-semibold">~/world/data</span>
						</div>
					</div>
					<Input type="text" className="text-lg" placeholder="Название файла" />
					{/* #TODO: Расширение файла: Select с расширениями файла, которые можно создать, лучше их с бэка получать */}
					<Button
						variant="primary"
						className="self-end h-auto py-1 text-lg"
						onClick={handleCreateFolder}
					>
						Создать
					</Button>
				</div>
			</DialogContent>
		</Dialog>
	)
}
