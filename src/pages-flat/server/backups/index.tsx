'use client'

import clsx from 'clsx'
import { Save, Trash2, Undo2 } from 'lucide-react'

import { Button } from '@/shared/ui/button'
import { Heading, SubHeading } from '@/shared/ui/heading'
import { Input } from '@/shared/ui/input'
import { Switch } from '@/shared/ui/switch'

import { useServerBackups } from './hooks'
import styles from './styles.module.scss'

export function ServerBackups() {
	const { isAutoCopy, autoCopyPeriod, backupName, functions } = useServerBackups()

	const {
		handleAutoCopyPeriodChange,
		handleBackupNameChange,
		handleCreateBackupClick,
		handleDeleteBackupClick,
		handleIsAutoCopyChange,
		handleRestoreBackupClick,
		handleSaveAutoCopyClick,
	} = functions

	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<Heading className="mb-0">Управление резервными копиями</Heading>
				<div className={styles.autoCopy}>
					<span>Авто сохранение</span>
					<Switch checked={isAutoCopy} onCheckedChange={handleIsAutoCopyChange} />
					<div className={clsx(styles.autoCopyMore, { [styles.show]: isAutoCopy })}>
						<span>каждые</span>
						<Input
							type="number"
							min={0}
							max={30}
							className="w-[80px] py-1 px-2 text-lg border-2  focus-visible:ring-0 focus-visible:border-primary"
							value={autoCopyPeriod}
							onChange={handleAutoCopyPeriodChange}
						/>
						<span>дней</span>
						<Button
							variant="primary"
							size="icon"
							className="px-1 py-1"
							onClick={handleSaveAutoCopyClick}
						>
							<Save strokeWidth={1.75} size={28} />
						</Button>
					</div>
				</div>
			</div>
			<div className={styles.createBackup}>
				<Input
					value={backupName}
					className="bg-card w-full text-2xl px-6 h-full rounded-r-none border-2  focus-visible:ring-0 focus-visible:border-primary"
					onChange={handleBackupNameChange}
				/>
				<Button
					variant="primary"
					className="rounded-l-none text-xl h-full w-max whitespace-nowrap"
					onClick={handleCreateBackupClick}
				>
					Создать бекап
				</Button>
			</div>
			<SubHeading className="text-2xl mb-0">Доступные резервные копии</SubHeading>
			<div className={styles.backups}>
				<div className={styles.backup}>
					<span className={styles.backupName}>Алмазы в шахте</span>
					<span className={styles.backupDate}>16.06.2023, 21:32:32</span>
					<span className={styles.backupAuthor}>ZeroProger</span>
					<span className={styles.backupSize}>78,32 MB</span>
					<div className={styles.backupActions}>
						<Button variant="primary" size="icon" onClick={handleRestoreBackupClick}>
							<Undo2 strokeWidth={2.5} size={24} />
						</Button>
						<Button variant="destructive" size="icon" onClick={handleDeleteBackupClick}>
							<Trash2 size={24} />
						</Button>
					</div>
				</div>
				<div className={styles.backup}>
					<span className={styles.backupName}>Save in cave</span>
					<span className={styles.backupDate}>19.05.2023, 17:41:42</span>
					<span className={styles.backupAuthor}>kirieshki</span>
					<span className={styles.backupSize}>24,59 MB</span>
					<div className={styles.backupActions}>
						<Button variant="primary" size="icon" onClick={handleRestoreBackupClick}>
							<Undo2 strokeWidth={2.5} size={24} />
						</Button>
						<Button variant="destructive" size="icon" onClick={handleDeleteBackupClick}>
							<Trash2 size={24} />
						</Button>
					</div>
				</div>
				<div className={styles.backup}>
					<span className={styles.backupName}>На драконе края</span>
					<span className={styles.backupDate}>27.08.2023, 16:21:59</span>
					<span className={styles.backupAuthor}>Lanskih.M</span>
					<span className={styles.backupSize}>126,89 MB</span>
					<div className={styles.backupActions}>
						<Button variant="primary" size="icon" onClick={handleRestoreBackupClick}>
							<Undo2 strokeWidth={2.5} size={24} />
						</Button>
						<Button variant="destructive" size="icon" onClick={handleDeleteBackupClick}>
							<Trash2 size={24} />
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}
