import { FormElement, Switch, SwitchEvent } from '@nextui-org/react'
import { ChangeEvent, FC, useState } from 'react'

import { Icon } from '@/components/ui/Icon'
import Heading from '@/components/ui/heading/Heading'

import Meta from '@/utils/meta/Meta'

import styles from './ServerBackups.module.scss'

interface IServerBackups {}

const ServerBackups: FC<IServerBackups> = () => {
	const [isAutoCopy, setIsAutoCopy] = useState<boolean>(false)
	const [autoCopyPeriod, setAutoCopyPeriod] = useState<number>(0)
	const [backupName, setBackupName] = useState<string>('')

	const handleIsAutoCopyChange = (e: SwitchEvent) => {
		setIsAutoCopy(e.target.checked)
	}

	const handleAutoCopyPeriodChange = (e: ChangeEvent<FormElement>) => {
		setAutoCopyPeriod(parseInt(e.target.value))
	}

	const handleSaveAutoCopyClick = () => {
		console.log('auto copy save')
	}

	const handleBackupNameChange = (e: ChangeEvent<FormElement>) => {
		setBackupName(e.target.value)
	}

	const handleCreateBackupClick = () => {
		console.log('create backup')
	}

	const handleRestoreBackupClick = () => {
		console.log('restore backup')
	}

	const handleDeleteBackupClick = () => {
		console.log('delete backup')
	}

	return (
		<Meta title="Резервные копии">
			<div className={styles.container}>
				<div className={styles.header}>
					<Heading title="Резервные копии" />
					<div className={styles.autoCopy}>
						<span>Авто сохранение</span>
						<Switch checked={isAutoCopy} onChange={handleIsAutoCopyChange} />
						{isAutoCopy && (
							<>
								<span>каждые</span>
								<input
									type="number"
									min={0}
									max={30}
									placeholder="Название резервной копии"
									className={styles.autoCopyInput}
									value={autoCopyPeriod}
									onChange={handleAutoCopyPeriodChange}
								/>
								<span>дней</span>
								<button type="button" className={styles.saveBtn} onClick={handleSaveAutoCopyClick}>
									<Icon name="FaSave" size={24} />
								</button>
							</>
						)}
					</div>
				</div>
				<div className={styles.createBackup}>
					<input
						type="text"
						value={backupName}
						className={styles.createBackupInput}
						onChange={handleBackupNameChange}
					/>
					<button
						type="button"
						className={styles.createBackupBtn}
						onClick={handleCreateBackupClick}
					>
						Создать резервную копию
					</button>
				</div>
				<div className={styles.backupsTitle}>Доступные резервные копии</div>
				<div className={styles.backups}>
					<div className={styles.backup}>
						<span className={styles.backupName}>Алмазы в шахте</span>
						<span className={styles.backupDate}>16.06.2023, 21:32:32</span>
						<span className={styles.backupAuthor}>ZeroProger</span>
						<span className={styles.backupSize}>78,32 MB</span>
						<button
							type="button"
							className={styles.restoreBackupBtn}
							onClick={handleRestoreBackupClick}
						>
							<Icon name="FaUndo" size={20} />
						</button>
						<button
							type="button"
							className={styles.deleteBackupBtn}
							onClick={handleDeleteBackupClick}
						>
							<Icon name="FaTrashAlt" size={20} />
						</button>
					</div>
					<div className={styles.backup}>
						<span className={styles.backupName}>Save in cave</span>
						<span className={styles.backupDate}>19.05.2023, 17:41:42</span>
						<span className={styles.backupAuthor}>kirieshki</span>
						<span className={styles.backupSize}>24,59 MB</span>
						<button
							type="button"
							className={styles.restoreBackupBtn}
							onClick={handleRestoreBackupClick}
						>
							<Icon name="FaUndo" size={20} />
						</button>
						<button
							type="button"
							className={styles.deleteBackupBtn}
							onClick={handleDeleteBackupClick}
						>
							<Icon name="FaTrashAlt" size={20} />
						</button>
					</div>
					<div className={styles.backup}>
						<span className={styles.backupName}>На драконе края</span>
						<span className={styles.backupDate}>27.08.2023, 16:21:59</span>
						<span className={styles.backupAuthor}>Lanskih.M</span>
						<span className={styles.backupSize}>126,89 MB</span>
						<button
							type="button"
							className={styles.restoreBackupBtn}
							onClick={handleRestoreBackupClick}
						>
							<Icon name="FaUndo" size={20} />
						</button>
						<button
							type="button"
							className={styles.deleteBackupBtn}
							onClick={handleDeleteBackupClick}
						>
							<Icon name="FaTrashAlt" size={20} />
						</button>
					</div>
				</div>
			</div>
		</Meta>
	)
}

export default ServerBackups
